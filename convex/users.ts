import { query } from "./_generated/server";
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
