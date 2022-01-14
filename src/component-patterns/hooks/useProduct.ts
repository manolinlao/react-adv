import { useEffect, useState, useRef } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs{
  product: Product;
  onChange?:( args: onChangeArgs ) => void;
  value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }:useProductArgs ) => {

  const [ counter, setCounter ] = useState( value );
  console.log('useProduct::' + value);

  const isControlled = useRef( !!onChange );

  const increaseBy = ( value:number ) => {

    console.log("value inincreaseBy =" + value);

    if( isControlled.current && onChange) {
      return onChange( {count: value, product } );
    }

    const newValue = Math.max(counter + value, 0);
    //setCounter( prev => Math.max(prev + value, minValue) );
    setCounter( newValue );

    //confirmamos que si onChange tiene valor entonce la ejecutamos
    onChange && onChange({ count: newValue, product: product });
  }

  useEffect(()=>{  
    console.log("value in useEffect = " + value);  
    setCounter( value );
  },[value]);

  return{
    counter,
    increaseBy
  }
}