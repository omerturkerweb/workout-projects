 import ProductJson from './context/ProductsJson.json'
 import {useState,useEffect} from 'react'
 import Products from './components/Products';



function App() {  

          const[basket, setBasket] = useState([])
          const [amount , setAmount] = useState([])
      
              useEffect( () => {
                  console.log(basket)
              },[basket])
              const closeBasket = () => {
                document.querySelector('.basket-section').style.visibility = "hidden"
                document.querySelector('.basket-section').style.opacity = "0"
              }
  return (
   
      <div className="App">
     
         <div className='product'>
                  {
                    ProductJson.map( product => (
                        <Products 
                        key ={product.id}
                        product = {product}
                        basket = {basket}
                        setBasket={setBasket}
                        amount = {amount}
                        setAmount = {setAmount}
                      />
                    ))
                  }
         </div>

                      {
                         basket.length !==0
                         ?<h3>{basket.reduce((acc,item) => {
                          return acc + item.price * item.amount
                         },0)} $ </h3> 
                         : <div>your basket looks like an empty. add something to buy.</div>

                      }

                          <div className='basket-section'>
                            <div className='basket-header'>
                             <p className='my-basket-title'> my Basket</p> 
                             <span onClick={closeBasket} className='exit-basket'>X</span>
                            </div>
                            <div className='basket-items-info'>
                                <p>picture</p>
                                <p>name</p>
                                <p>brand</p>
                                <p>amount</p>
                                <p>price</p>
                              </div>
                            <div className='basket-body'>
                             
                            {
                          basket
                          ?basket.map(item => {
                            return(
                              <div key={item.name} className='basket-item'>
                                <img className='basket-item-img' src={item.img}></img>
                                <h3 className='basket-item-name'>{item.name}</h3>
                                <h3 className='basket-item-brand'>{item.brand}</h3>
                                <button className='basket-plus'>+</button> <h3 className='basket-item-amount'>{item.amount}</h3><button className='basket-minus'>-</button>
                               
                                <h3 className='basket-item-price'>{item.price}</h3>
                              </div>
                            )
                          })
                          :null
                        }
                          <div className='basket-total'>
                             <div className='total-text'>
                                total
                             </div>
                              <div className='total-number'>$
                                  {basket.reduce((acc,item) => {
                                    return  acc + item.price*item.amount
                                  },0)}
                              </div>
                          </div>
                          <div className='confirm-card'>
                                  

                                      
                          
                                     

                            <button className='confirm-card-btn'>Confirm Cart {
                              basket.length>0
                              ?basket.reduce((acc,item) => {
                                return acc + item.amount
                            
                              },0)
                              :null
                            }
                            </button>
                          </div>
                            </div>
                                  
                          </div>
                       
    </div>

  );
}

export default App;
