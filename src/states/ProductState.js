import React, { useState, useContext} from 'react'

const ProductState = (props) => {

  const initialState = [
    {
      id: '01',
      name: 'Rúcula Selvagem Americana 1 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do mal",
      price: 9,
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },
    {
      id: '02',
      name: 'Rúcula Selvagem Americana 2',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do mal",
      price: 12,
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },    {
      id: '04',
      name: 'Rúcula Selvagem Americana 3 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum do masd asdkaçsl daçlsk dçalsk dçalksd çlaksd çlkasçdl kaçsd kaçsl dkaçal",
      price: 8,
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },    {
      id: '05',
      name: 'Rúcula Selvagem Americana 4 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum d asçld açsdk çalsd alskdç alksdç alskd ço mal",
      price: 12,
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },
    {
      id: '10',
      name: 'Rúcula Selvagem Americana 4 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum d asçld açsdk çalsd alskdç alksdç alskd ço mal",
      price: 12,
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },
    {
      id: '06',
      name: 'Rúcula Selvagem Americana 4 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum d asçld açsdk çalsd alskdç alksdç alskd ço mal",
      price: 12,
      imageUrl: "/assets/banner-1.jpg",
      available: 10,
      orderQty:0,
    },
    {
      id: '07',
      name: 'Rúcula Selvagem Americana 4 ',
      unit: "130g",
      description: "Essa rúcula é lorem ipsum d asçld açsdk çalsd alskdç alksdç alskd ço mal",
      price: 12,
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
  const checkOutPrice = () => {
    var total = 0;
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      total += product.orderQty * product.price;
    }
    return total
  }
  const productsInBasket = () => {
    const productsInBasket = products.filter(product => product.orderQty !== 0);
    return productsInBasket
  }
  const numberOfItemsInBasket = () => {
    var totalItems = 0;
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      totalItems += product.orderQty;
    }
    return totalItems
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        placeOrder,
        removeOrder,
        checkOutPrice,
        productsInBasket,
        numberOfItemsInBasket,
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