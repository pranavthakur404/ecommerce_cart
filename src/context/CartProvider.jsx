import { createContext, useContext, useEffect, useReducer } from "react";


const cartContext = createContext();

function CartProvider({ children }) {
  function reducer(cartData, { type, payload }) {
    switch (type) {
      case "ADD":
        return [...cartData, payload];
      case "REMOVE":
        return cartData.filter((data) => {
          return data.id !== payload;
        });
      case "INC_QUANT":
        return cartData.map((data) => {
          if (data.id == payload) {
            return { ...data, quantity: data.quantity + 1 };
          } else {
            return { ...data };
          }
        });

      case "DEC_QUANT":
        return cartData.map((data) => {
          if (data.id == payload) {
            if (data.quantity > 1) {
              return { ...data, quantity: data.quantity - 1 };
            } else {
              return { ...data };
            }
          } else {
            return { ...data };
          }
        });
    }

    return cartData;
  }

  function addData(newData) {
    dispatch({
      type: "ADD",
      payload: newData,
    });
  }

  function removeData(id) {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  }

  function increaseQaunt(id) {
    dispatch({
      type: "INC_QUANT",
      payload: id,
    });
  }
  function decreaseQaunt(id) {
    dispatch({
      type: "DEC_QUANT",
      payload: id,
    });
  }

  function storedData() {
    if (JSON.parse(localStorage.getItem("alldata"))) {
      return JSON.parse(localStorage.getItem("alldata"));
    } else {
      return [];
    }
  }

  const [cartData, dispatch] = useReducer(reducer, storedData());

  useEffect(() => {
    localStorage.setItem("alldata", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <cartContext.Provider
      value={{
        cartData,
        addData,
        removeData,
        increaseQaunt,
        decreaseQaunt,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}

export default CartProvider;
