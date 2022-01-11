import { useState } from "react";

export const useProduct = ( { initialCount = 0, minValue = 0 } ) => {
  const [ counter, setCounter ] = useState( initialCount );

  const increaseBy = ( value:number ) => {
    setCounter( prev => Math.max(prev + value, minValue) );
  }

  return{
    counter,
    increaseBy
  }
}