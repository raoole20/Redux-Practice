import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { showCart: false, items: [], totalQuantity: 0 },
  reducers: {
    useShowCart(lastState) {
      lastState.showCart = !lastState.showCart;
    },
    addItemToCart(lastState, actions) {
      const newItem = actions.payload;
      const existItem = lastState.items.find((item) => item.id === newItem.id);
      ++lastState.totalQuantity;
      if (!existItem) {
        lastState.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          total: newItem.price,
        });
        return;
      }
      existItem.quantity = ++existItem.quantity;
      existItem.total = existItem.total + newItem.price;
    },
    removeItem(lastState, actions) {
      lastState.totalQuantity--;

      const itemSelected = actions.payload;
      const newItems = lastState.items.filter((item) => {
        if (item.id === itemSelected.id) {
          return item.quantity === 1 ? false : --item.quantity;
        }
        return item;
      });

      lastState.items = newItems;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
