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
    tax:0,
    shipping:0,
    discount: 0
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

      state.tax = 34
      state.shipping = 20
      state.discount = 10
    },

    removeProduct(state, action) {
      console.log("product removal", state.products);
      let index = action.payload;
      state.products.splice(index, 1);
      if (state.products.length  == 0) {
        state.tax = 0
        state.shipping = 0
        state.discount = 0
      }
    },

    setQuantity(state, action){
      let index = action.payload.index;
      let qty = action.payload.quantity;

      console.log(index, qty, state.products[index].quantity)
      
      // state.products.splice(index, 1);

      state.products[index].quantity = qty
    },

    emptyCart(state) {
      state.deliveryCharge = 0;
      state.subTotal = 0;
      state.total = 0;
      state.products= [];
      
      state.tax = 0
      state.shipping = 0
      state.discount =  0
    },

    getProducts(state) {
      return state.products;
    },
    setProducts(state, action) {
      let products = action.payload;
      state.products.push(products);
    },

    setTotal(state) {
      console.log(Math.ceil(state.subTotal + state.deliveryCharge + state.tax + state.shipping  - state.discount))
      // return Math.ceil(state.subTotal + state.deliveryCharge + state.tax + state.shipping  - state.discount);
      state.total = Math.ceil(state.subTotal + state.deliveryCharge + state.tax + state.shipping  - state.discount)
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
  setQuantity,
  emptyCart,
  setTotal,
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
    price: product.discount_price,
  };
};

