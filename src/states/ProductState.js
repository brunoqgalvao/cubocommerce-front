import React, { useState, useContext} from 'react'

const ProductState = (props) => {

  const initialState = [
    {
      id: '01',
      name: 'Rúcula Selvagem Americana 1 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do mal",
      price: '9',
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },
    {
      id: '03',
      name: 'Rúcula Selvagem Americana 2',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do mal",
      price: '9',
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },    {
      id: '04',
      name: 'Rúcula Selvagem Americana 3 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do mal",
      price: '9',
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },    {
      id: '05',
      name: 'Rúcula Selvagem Americana 4 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do mal",
      price: '9',
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    }
  ]
  const [products, setProducts] = useState(initialState);


  const placeOrder = (id) => {
    const newProducts = products.map(product => {
      if(product.id===id){
        const newOrderQty = Math.min(product.orderQty + 1,product.available);
        return {...product, orderQty: newOrderQty};
      } else {
        return product;
      }
    });
    console.log(newProducts);
    setProducts(newProducts);
  }
  const removeOrder = (id) => {
    const newProducts = products.map(product => {
      if(product.id===id){
        const newOrderQty = Math.max(product.orderQty - 1,0);
        return {...product, orderQty: newOrderQty};
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        placeOrder,
        removeOrder
      }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState

export const ProductContext = React.createContext();
export const useProduct = () => {
  const products = useContext(ProductContext)
  return products
}