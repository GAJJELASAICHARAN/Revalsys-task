import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import { DataModel } from "./_generated/dataModel";
import { MutationCtx } from "./_generated/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
  callbacks: {
    async createOrUpdateUser(
      ctx: MutationCtx,
      args: {
        existingUserId: any;
        profile: { name?: string | null; email?: string | null };
      }
    ) {
      if (args.existingUserId) {
        return args.existingUserId;
      }
      // Create the user record — the profile name/email come from sign-up args
      return ctx.db.insert("users", {
        name: args.profile.name ?? undefined,
        email: args.profile.email ?? undefined,
      });
    },
  },
});
