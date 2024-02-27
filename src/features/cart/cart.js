import { createSlice } from '@reduxjs/toolkit'
// import { networkImage } from 'utils/network'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      shouldOpen: false,
      products: [],
      subTotal: 0,
      total : 0,
      deliveryCharge: 0,
      totalProduct:0
  },
  reducers: {
    open: (state) => {

        state.shouldOpen = true
    },
    close: (state) => {

        state.shouldOpen = false
    },
    getState(state){
        return state.shouldOpen
    },

    setProduct(state, action){
        // let products = action.payload
        // state.products.push(products)
        
        let product = action.payload

        // state.vendorId = product.product.vendor_id
        
        
        if(state.products.length > 0){
                // calculateDeliveyCharge({data: product.product , quantity :  product.quantity});
                let exists = state.products.find((item)=>{ 
                    if(item.code == product.code){
                        item.quantity = Number(item.quantity) + Number(product.quantity)
                        item.measurement = product.measurement
                    }
                    return item.code == product.code;
                    
                });
                if(exists == undefined ){
                    state.products.push(productBody(product));
                }
            

            
        }else{
            // calculateDeliveyCharge({data: product.product , quantity :  product.quantity});
            
            state.products.push(productBody(product))
        }
        
        console.log(state.products)
    },

    removeProduct(state, action ){
        console.log('product removal', state.products)
        let index = action.payload
        state.products.splice(index, 1);
        
        
    },

    emptyCart(state){
        state.vendorId = null
        state.deliveryCharge = 0;
        state.kmCharge = 0
        state.weightCharge = 0
        state.baseFare = 0
        state.subTotal = 0;
        state.total =0;
        state.products.splice(0, state.products.length)
    },

    getProducts(state){
        return state.products;
    },
    setProducts(state, action ){
        let products = action.payload
        state.products.push(products)
        
    },
    setChargeReference(state, action){
        let crgRef = action.payload
        this.chargeReference = crgRef
    },
    getChargeReference(state){
        return state.chargeReference 
    },
    setBaseFare(state, action ){
        let baseFare = action.payload
        this.baseFare = baseFare
    },
    getBaseFare(state){
        return Math.ceil(state.baseFare)
    },
    setDeliveryCharge(state, action){
        let deliveryCharge = action.payload
        this.deliveryCharge = deliveryCharge
    },
    getDeliveryCharge(state){
        return Math.ceil(state.deliveryCharge)
    },
    getVendorId(state){
        return state.vendorId
    },
    setWeightCharge(state, action ){
        let weightCharge = action.payload
        this.weightCharge = weightCharge
    },
    setkmCharge(state, action  ){
        let kmCharge = action.payload
        this.kmCharge = kmCharge
    },
    getWeightCharge(state){
        return state.weightCharge
    },
    getKmCharge(state){
        return state.kmCharge
    },
    checkCartStatus(state){
        if(state.products.length == 0){
            state.deliveryCharge =0;
            state.subTotal = 0;
        }
    },
    getTotal(state){
        return Math.ceil(state.subTotal + state.deliveryCharge)
    },
    setSubTotal(state, action){
        state.subTotal = 0
        state.totalProduct = 0
        if (action.payload.length > 0) {
            
            action.payload.map((dt) => {
                state.subTotal += dt.quantity * dt.price
            })
            state.totalProduct = action.payload.length 
        }

    },
    getSubTotal(state){
        return Math.ceil(state.subTotal)
    },
    setQuantity(state, action){

        let quantity =  action.payload.qty
        let prdIndex = action.payload.productIndex
        state.products[prdIndex].quantity = quantity        
    }
    
  },
})

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
     setChargeReference,
     getChargeReference,
     setBaseFare,
     getBaseFare,
     setDeliveryCharge,
     getDeliveryCharge,
     getVendorId,
     setWeightCharge,
     setkmCharge,
     getWeightCharge,
     getKmCharge,
     checkCartStatus,
     getTotal,
     setSubTotal,
     getSubTotal,
     setQuantity    
    } = cartSlice.actions

export default cartSlice.reducer


const productBody = (product)=>{
    
    
    var price = product.product.variations.map((dt)=>{
            if(dt.variation_code == product.code){
                return dt.discounted_price? dt.discounted_price : dt.price;
            }else{
                return ''
            }
        }).join('')


    return {
        'product_id': product.product.id,
        'variationRaw': product.variationRaw,
        'raw': product.product,
        'name': product.product.name,
        // 'image' : networkImage(product.product.thumbnail_path),
        'quantity': product.quantity,
        'code': product.code,
        'variation': product.variationString,
        'price':  price,
        'measurement': JSON.stringify(product.measurement)
        }
    
}


