/* eslint-disable */
/**
 * Stub file — replaced automatically when you run `npx convex dev`.
 * Do not edit manually.
 *
 * Convex function references are plain objects with { _type, _name }.
 * These stubs let the build pass before the real types are generated.
 */

function ref(name: string) {
  return { _type: "query" as const, _name: name };
}
function mut(name: string) {
  return { _type: "mutation" as const, _name: name };
}

export const api = {
  users: {
    currentUser: ref("users:currentUser"),
  },
  cart: {
    getItems: ref("cart:getItems"),
    addItem: mut("cart:addItem"),
    updateQuantity: mut("cart:updateQuantity"),
    removeItem: mut("cart:removeItem"),
    clearCart: mut("cart:clearCart"),
    syncFromLocal: mut("cart:syncFromLocal"),
  },
  wishlist: {
    getItems: ref("wishlist:getItems"),
    isWishlisted: ref("wishlist:isWishlisted"),
    toggle: mut("wishlist:toggle"),
  },
  orders: {
    placeOrder: mut("orders:placeOrder"),
    getUserOrders: ref("orders:getUserOrders"),
    getOrder: ref("orders:getOrder"),
  },
} as const;

export const internal = {} as Record<string, any>;
