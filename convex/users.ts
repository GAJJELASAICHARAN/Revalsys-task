import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    return await ctx.db.get(userId);
  },
});

// Returns true if a user with the given email already exists.
// Email comparison is case-insensitive (emails are normalized to lowercase).
export const emailExists = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const normalized = args.email.trim().toLowerCase();
    if (normalized === "") return false;
    const existing = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), normalized))
      .first();
    return existing !== null;
  },
});

export const updateName = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const name = args.name.trim();
    if (name.length < 2) {
      throw new Error("Name must be at least 2 characters");
    }
    if (name.length > 50) {
      throw new Error("Name must be 50 characters or less");
    }

    await ctx.db.patch(userId, { name });
    return null;
  },
});
