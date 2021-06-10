# Redux Shopping Cart Project 

- Redux Stuff 
- reducer : function that used to update store 
- two arguments : state , action 
- state : old state / state before update 
- action : what happened / what update 
- return updated or old state 
- store.getState() function 

### Dispatch Method 
- send actions to the store 
- actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action 
- DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

### React-Redux 
- React-redux  - Provider - wraps app
- connect : used in components 
- Note : Provider will look for the prop named store 

### To refactore "DECREASE" 
- In CartItems.js, 

```
onClick = { () => {
    if (amount === 1){ 
        return remove(); 
    }
    else { 
        return decrease(); 
    }
}}

```
- reducer.js , just copy and paste code from "INCREASE" function 


### Redux-Dev-Extension 

Check [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
```
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```
-------------------------------------------------
- Note: When you deploy it on netlify , don't forget to update "build" in package.json 
  
```
    "build": "CI= react-scripts build",
```
  
- In public folder, create _redirects file and add  /* /index.html 200 
  
- Deployed on Netlify:
 [![Netlify Status](https://api.netlify.com/api/v1/badges/9411741c-7079-45d4-9521-18c7c48f2b7f/deploy-status)](https://app.netlify.com/sites/redux-shopping-cart-by-thiriaung/deploys) https://redux-shopping-cart-by-thiriaung.netlify.app/
