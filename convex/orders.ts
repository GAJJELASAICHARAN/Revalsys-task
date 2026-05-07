import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

const orderItemValidator = v.object({
  productId: v.string(),
  name: v.string(),
  price: v.number(),
  quantity: v.number(),
  image: v.string(),
});

const addressValidator = v.object({
  name: v.string(),
  street: v.string(),
  city: v.string(),
  state: v.string(),
  zip: v.string(),
  country: v.string(),
});

export const placeOrder = mutation({
  args: {
    items: v.array(orderItemValidator),
    shippingAddress: addressValidator,
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const subtotal = args.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const orderId = await ctx.db.insert("orders", {
      userId,
      items: args.items,
      subtotal,
      tax,
      total,
      status: "shipped",
      shippingAddress: args.shippingAddress,
    });

    // Clear the user's Convex cart after order
    const cartItems = await ctx.db
      .query("cartItems")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    await Promise.all(cartItems.map((item) => ctx.db.delete(item._id)));

    return orderId;
  },
});

export const getUserOrders = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    return ctx.db
      .query("orders")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const getOrder = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    const order = await ctx.db.get(args.orderId);
    if (!order || order.userId !== userId) return null;
    return order;
  },
});

export const returnOrder = mutation({
  args: {
    orderId: v.id("orders"),
    reason: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const order = await ctx.db.get(args.orderId);
    if (!order || order.userId !== userId) throw new Error("Order not found");

    if (order.status !== "shipped" && order.status !== "delivered") {
      throw new Error("Only shipped or delivered orders can be returned");
    }

    await ctx.db.patch(args.orderId, {
      status: "returned",
      returnedAt: Date.now(),
      returnReason: args.reason,
    });

    return null;
  },
});

export const getUserReturnedOrders = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    return ctx.db
      .query("orders")
      .withIndex("by_user_and_status", (q) =>
        q.eq("userId", userId).eq("status", "returned")
      )
      .order("desc")
      .collect();
  },
});
