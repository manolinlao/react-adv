
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';
import { products } from "../data/products";

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>

      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
      }}>

        {
          products.map( product => (
            <ProductCard 
              key={ product.id } 
              product={ product } 
              className="bg-dark text-white"
              onChange={ (evento)=> onProductCountChange(evento) }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-white"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ))
        }
        
      </div>

      <div className="shopping-cart">
        {
          Object.entries( shoppingCart ).map( ([ key, product ])=> (
            <ProductCard 
              key={ key }
              product={ product } 
              className="bg-dark text-white"
              style={{ width:'100px' }}
              value={ product.count }
              onChange={ (evento)=> onProductCountChange(evento) }
            >
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-white"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ))
        }
      </div>

      <div>
        <code>
          { JSON.stringify(shoppingCart,null,5)}
        </code>
      </div>
      
    </div>
  )
}
