import { createSlice } from "@reduxjs/toolkit";
// import { networkImage } from 'utils/network'

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shouldOpen: false,
    products: [],
    subTotal: 0,
    total: 0,
    deliveryCharge: 0,
    totalProduct: 0,
  },
  reducers: {
    open: (state) => {
      state.shouldOpen = true;
    },
    close: (state) => {
      state.shouldOpen = false;
    },
    getState(state) {
      return state.shouldOpen;
    },

    setProduct(state, action) {
      let product = action.payload;
      
      if (state.products.length > 0) {
        let exists = state.products.find((item) => {
          
          if (item.product_id == product.id) {
            item.quantity = item.quantity + 1; 
          }
          return item.product_id == product.id;
        });
        
        if (exists == undefined) {
          state.products.push(productBody(product));
        }
      } else {

        state.products.push(productBody(product));
      }
    },

    removeProduct(state, action) {
      console.log("product removal", state.products);
      let index = action.payload;
      state.products.splice(index, 1);
    },

    emptyCart(state) {
      state.vendorId = null;
      state.deliveryCharge = 0;
      state.kmCharge = 0;
      state.weightCharge = 0;
      state.baseFare = 0;
      state.subTotal = 0;
      state.total = 0;
      state.products.splice(0, state.products.length);
    },

    getProducts(state) {
      return state.products;
    },
    setProducts(state, action) {
      let products = action.payload;
      state.products.push(products);
    },

    getTotal(state) {
      return Math.ceil(state.subTotal + state.deliveryCharge);
    },
    setSubTotal(state, action) {
      state.subTotal = 0;
      state.totalProduct = 0;
      if (action.payload.length > 0) {
        action.payload.map((dt) => {
          state.subTotal += dt.quantity * dt.price;
        });
        state.totalProduct = action.payload.length;
      }
    },
    getSubTotal(state) {
      return Math.ceil(state.subTotal);
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  open,
  close,
  getState,
  setProduct,
  getProducts,
  setProducts,
  removeProduct,
  emptyCart,
  getTotal,
  setSubTotal,
  getSubTotal,
} = cartSlice.actions;

export default cartSlice.reducer;

const productBody = (product) => {
  return {
    product_id: product.id,
    raw: product,
    name: product.title,
    image: product.image,
    quantity: 1,
    price: product.price,
  };
};

