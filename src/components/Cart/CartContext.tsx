import { createContext, useState } from "react";
import { Products } from "../../models/products";

export const CartContext = createContext<Array<Products> | null>(null);

export const CartContextProvider = (product: Array<Products>) => {

  const [cartList, setCartList] = useState(Array<Products>());

  const addCart = (item: Products, qty: number): Array<Products> | undefined => {
    let foundItem = cartList.find(prod => prod.id === item.id);

    if (foundItem === undefined) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          category: item.category,
          idCategory: item.idCategory,
          title: item.title,
          price: item.price,
          pictureUrl: item.pictureUrl,
          descripcion: item.descripcion
        }
      ]);
      return cartList;
    }
  }

  return (
    <CartContext.Provider value={
      {
        ...addCart,
        ...cartList
      }
    }>
      {product}
    </CartContext.Provider>
  )
}