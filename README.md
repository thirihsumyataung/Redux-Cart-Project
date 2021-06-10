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