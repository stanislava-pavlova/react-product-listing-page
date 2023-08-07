import { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  status: 'loading', // 'loading', 'error', 'ready'
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        products: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    default:
      throw new Error('Unknown Action');
  }
}

function ProductProvider({ children }) {
  const [{ status, products }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <ProductContext.Provider value={{ status, products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error('ProductContext was used outside of the ProductProvider');
  return context;
}

export { ProductProvider, useProduct };
