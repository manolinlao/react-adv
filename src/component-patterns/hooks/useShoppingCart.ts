import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () =>{

  const [ shoppingCart, setShoppingCart ] = useState< { [key:string]: ProductInCart }>({});

  const onProductCountChange = ( { count, product }:{ count:number, product:Product } ) => {
    
    setShoppingCart( oldShoppingCart => {

      //si no existe el producto creamos uno con count = 0
      const productInCart:ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if( Math.max( productInCart.count + count, 0 ) > 0 ){
        //puedo incrementar
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      } 
      // si llegamos aqui es que el artículo no existe o el count es <0
      // hay que borrar el producto
      delete oldShoppingCart[product.id];
      return {
        ...oldShoppingCart
      }
    });
  }

  return {    
    shoppingCart,
    onProductCountChange
  }
}