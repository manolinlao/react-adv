
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>

      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
      }}>

        <ProductCard product={ product } className="bg-dark text-white">
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-white"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard product={ product } style={{backgroundColor:'#70d1f8'}}>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>

        <ProductCard product={ product }>
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title className="text-white"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
     
        
      </div>
      
    </div>
  )
}
