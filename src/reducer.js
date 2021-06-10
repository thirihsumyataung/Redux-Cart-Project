import { INCREASE, DECREASE , CLEAR_CART , REMOVE, GET_TOTAL, TOGGLE_AMOUNT} from "./actions"; 
import cartItems from './cart-items'; 
//initial Store 
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

function reducer(state = initialStore, action) {
  console.log({ state, action });
  
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: [] };
        
        // case DECREASE:
        //     {

        //        let tempCart = [];
        //         if (action.payload.amount === 1) {
        //             return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) };
        //         }
        //     else {
        //         tempCart = state.cart.map((cartItem) => {
        //             if (cartItem.id === action.payload.id) {
        //                 cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        //             }
        //             return cartItem;
        //         })
        //     }            
        //     return { ...state, cart: tempCart}; 
        //     }
            
        case DECREASE:
             {
                let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem= {...cartItem, amount:cartItem.amount - 1}
                } 
                return cartItem
            });
            return { ...state, cart: tempCart};
         
            }
        case INCREASE:
            {
                let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem= {...cartItem, amount:cartItem.amount + 1}
                } 
                return cartItem
            });
            return { ...state, cart: tempCart};
         
            }
           
        case REMOVE:
            console.log(action.payload.id);
            return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) };
        
        case GET_TOTAL: 
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
                 }, { total: 0, amount: 0 });
                total = parseFloat(total.toFixed(2));
                return { ...state, total, amount };
        
        case TOGGLE_AMOUNT:
            return { ...state, cart: state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        if (action.payload.toggle === "inc") {
                            return  cartItem= {...cartItem, amount:cartItem.amount + 1}
                        }
                        if (action.payload.toggle === "dec") {
                            return  cartItem= {...cartItem, amount:cartItem.amount - 1}
                        }
                }
                    return cartItem; 
            })}
            
        default:
            return state; 
    }
//   if (action.type === DECREASE) {
//     return {...state, count: state.count - 1, name: "anna" }; 
//   }
//   if (action.type === INCREASE) {
//     return {...state, count: state.count + 1 }; 
//   }
  
//     if (action.type === CLEAR_CART) {
//         return { ...state , cart: []}
//     }
  //return state; 
}

export default reducer; 