import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const Cart = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const subtotal = totalPrice;
  const shipping = items.length > 0 ? 10 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* Sliding Cart Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed right-0 top-0 z-50 h-screen w-full max-w-md overflow-y-auto bg-white shadow-xl"
      >
        <div className="flex flex-col h-full font-[DM_Sans]">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div>
              <h2 className="text-2xl font-bold">Your Bag</h2>
              <p className="text-sm text-gray-600">
                {itemCount} item{itemCount !== 1 ? "s" : ""}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full items-center justify-center text-center text-gray-500">
                <p>Your bag is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 border-b pb-4"
                  >
                    <div className="h-24 w-24 rounded-lg bg-[#F5F5F5]">
                      <img
                        src={item.image?.side}
                        alt={item.name}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="mt-1 font-semibold text-gray-900">
                        €{item.price}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-1">
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  size: item.size,
                                  quantity: item.quantity - 1,
                                })
                              )
                            }
                            className="h-6 w-6 rounded flex items-center justify-center hover:bg-gray-200 font-bold text-gray-800"
                          >
                            −
                          </button>
                          <span className="w-6 text-center font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  size: item.size,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                            className="h-6 w-6 rounded flex items-center justify-center hover:bg-gray-200 font-bold text-gray-800"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Total</p>
                          <p className="font-bold text-gray-900">
                            €{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            dispatch(
                              removeFromCart({
                                id: item.id,
                                size: item.size,
                              })
                            );
                            toast.info(`${item.name} removed from cart`, {
                              position: "bottom-right",
                              autoClose: 2000,
                            });
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Icon icon="tdesign:trash" width="20" height="20" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t px-6 py-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>€{shipping.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Tax (10%):</span>
                  <span>€{tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t pt-4 flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-xl text-black">€{total.toFixed(2)}</span>
              </div>
              <button className="w-full rounded-full bg-black px-6 py-3 text-white hover:bg-gray-900">
                Checkout
              </button>
              <button
                onClick={() => {
                  dispatch(clearCart());
                  toast.success("Cart cleared", {
                    position: "bottom-right",
                    autoClose: 2000,
                  });
                }}
                className="w-full rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:border-gray-500"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
