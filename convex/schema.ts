import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  // authTables provides: users, authSessions, authAccounts, authVerificationCodes, authRateLimits
  ...authTables,

  cartItems: defineTable({
    userId: v.id("users"),
    productId: v.string(),
    name: v.string(),
    price: v.number(),
    quantity: v.number(),
    image: v.string(),
  }).index("by_user", ["userId"]),

  wishlist: defineTable({
    userId: v.id("users"),
    productId: v.string(),
  })
    .index("by_user", ["userId"])
    .index("by_user_product", ["userId", "productId"]),

  orders: defineTable({
    userId: v.id("users"),
    items: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    subtotal: v.number(),
    tax: v.number(),
    total: v.number(),
    status: v.union(
      v.literal("pending"),
      v.literal("processing"),
      v.literal("shipped"),
      v.literal("delivered"),
      v.literal("returned"),
      v.literal("cancelled")
    ),
    returnedAt: v.optional(v.number()),
    returnReason: v.optional(v.string()),
    shippingAddress: v.optional(
      v.object({
        name: v.string(),
        street: v.string(),
        city: v.string(),
        state: v.string(),
        zip: v.string(),
        country: v.string(),
      })
    ),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_status", ["userId", "status"]),
});
