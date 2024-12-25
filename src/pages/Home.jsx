import Card from '../components/Product-Card/Card'
import data from '../../data.json'
import Cart from '../components/Cart/Cart'
import OrderModal from '../components/OrderModal/OrderModal'
export default function Home() {
  return (
        <main>
        <div className="App-container">
        <div className="products-container">
        <div className="App-header">
          <h2>Gourmet Desserts</h2>
          </div>
            <div className="product-list">
            {data.map((product, index)=> (
            <Card
            key= {index} 
            product = {product}/> 
            ))} 
            </div> 
        </div>
        <div className="Cart">
           <Cart/>
         </div>
        </div>

        <OrderModal />
        </main>
  )
}
