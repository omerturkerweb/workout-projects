

function Products({product,basket,setBasket,amount , setAmount}){

            const addBasket = () => {
                    document.querySelector('.basket-section').style.visibility = 'visible'
                    document.querySelector('.basket-section').style.opacity = '1'
                let currentProduct = basket.find(item => item.name === product.name)
                          
                if(currentProduct) {
                    currentProduct.amount+=1;
                    setBasket([...basket.filter(item => item.name !== product.name) ,currentProduct])
                }       
                else {
                    setBasket([...basket , {
                        name : product.name,
                        brand : product.brand,
                        img : product.img,
                        price : product.price,
                        amount : 1
                    }])
                }
               
              
            }
            const removeBasket = () => {
                let currentProduct = basket.find(item => item.name === product.name)
                currentProduct.amount-=1
                setBasket([...basket.filter(item => item.name !== product.name) , currentProduct])
                if(currentProduct.amount === 0) {
                    setBasket([...basket.filter(item => item.name !== product.name)])
                }
        }
                      
    return( 

             
           
                    <div className="product-card">
                        <div className="product-head">
                          <img src={product.img}></img>
                        </div>
                        <div className="product-body">
                            <h3 className="name-text">{product.name}</h3>
                            <h3 className="brand-text">{product.brand}</h3>
                            <h1 className="price-text">{product.price}$</h1>
                        </div>
                        <div className="product-footer">
                            <button className="add-basket-btn" onClick={addBasket}>Add to Basket!</button>
                            
                            
                        </div>
                      
                    </div>
           
  )
}
export default Products;