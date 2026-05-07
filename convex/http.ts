import { httpRouter } from "convex/server";
import { auth } from "./auth";

const http = httpRouter();

// Convex Auth requires these HTTP routes for token exchange and sign-out
auth.addHttpRoutes(http);

export default http;
