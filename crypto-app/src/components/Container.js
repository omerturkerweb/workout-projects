import React from 'react'


 function Container({symbol , img , high, low , volume , rank, change}) {
     function volumeSlicer (vol)  {
       let first = String(vol).slice(0,3)
       let second = String(vol).slice(3,6)
       let third = String(vol).slice(6,9)
       let result = `${first}.${second},${third}`
       return result;
     }  
  return (
    <div className='Container pl-20 p-14 my-8  mx-auto text-white flex justify-evenly items-center shadow-app-white  border border-b-gray-300 rounded relative'>

    <div className="name-volume">
       <img  src={img} className='coin-image absolute w-20 rounded-2xl left-10 top-10'></img>  
        <h3 className='coin-name'>{symbol.toUpperCase()}    <span className='text-app-half-passive text-xs'> /USDT </span> </h3>
     
        <p className='volume text-app-half-passive'>{volumeSlicer(volume)}</p>
    </div>
    <div className="lastPrice">
      <h3 className='last-price-high'>{high}</h3>
      <span className='last-price-low text-app-passive'>{low}</span>
    </div>
    <div className="rank">
      <h3 className=' text-app-rank'>#{rank}</h3>
    </div>
  
      {
          change>0  
          ?  <div className="change bg-app-green-back p-3 rounded-md shadow-app-green"> <h4 className='text-app-green-front '>+{change}%</h4> </div>
          :  <div className="change bg-app-red-back p-3 rounded-md shadow-app-red"> <h4 className='text-app-red-front'>{change}%</h4> </div>
      }
       

  </div>
  )
}

export default Container;