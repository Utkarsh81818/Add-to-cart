import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART reducer called ", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART reducer called ", action);
      console.warn("Data ", data);
      const remainingItems = data.filter((item) => item.id !== action.data);
      console.warn("remainingItems", remainingItems);
      return [...remainingItems];

    case EMPTY_CART:
      console.warn("EMPTY_CART reducer called ", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
