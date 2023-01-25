import {useState , useEffect ,useRef} from 'react'
import "./index.css"
import RingLoader from 'react-spinners/RingLoader'
import Container from './components/Container'
import ContainerInfo from './components/ContainerInfo'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'




function App() {
      const [item , setItem] =  useState([])
      const [isLoading , setIsLoading] = useState(true)
      const [searchKey , setSearchKey] = useState("")
      const [filteredItem , setFilteredItem] = useState([])


      const override = {
        position : "absolute",
        left : "43%", 
        top : "37%", 
      };
      
    useEffect( () => {
        
          fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
          .then(resp => resp.json())
          .then(resp => setItem(resp))
          .catch(err => console.log(err))
          .finally( () => {
            setIsLoading(false)
          })
        
     
      } , []) 
         
      useEffect( () => {
          if(searchKey) {
            let key = searchKey.toLowerCase();  
            setFilteredItem(item.filter( item => item.symbol.includes(key)))
      
           
          }
      }, [searchKey])

           
             
      

  return(   
    <>      
    { 
        isLoading
        ?<RingLoader
        color={"#fff"}
        size = {200}
        loading={isLoading}
        id="loader"
        cssOverride={override}
        />
        :<div className='min-w-app-size' id='container'>

             <Header/>

             <Search
              searchKey = {q => setSearchKey(q)}
              />  
             <ContainerInfo/>

            
            {
              searchKey
              ? filteredItem.map(item => {
                return(
                  <Container
                  key = {item.id}
                  symbol = {item.symbol}
                  img = {item.image}
                  high = {item.high_24h}
                  low = {item.low_24h}
                  volume = {item.total_volume}
                  rank = {item.market_cap_rank}
                  change = {item.market_cap_change_percentage_24h}
                  />
                )
              })
              :
              item.map(item => {
                return(
                  <Container
                  key = {item.id}
                  symbol = {item.symbol}
                  img = {item.image}
                  high = {item.high_24h}
                  low = {item.low_24h}
                  volume = {item.total_volume}
                  rank = {item.market_cap_rank}
                  change = {item.market_cap_change_percentage_24h}
                  />
                )
              })
            }     
              
             
        </div>
              
    }       
          
          <Footer/>
             
          
    </>
  )
}

export default App;