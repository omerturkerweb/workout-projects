import React from 'react'

function ContainerInfo() {
  return (
     <div className="ContainerInfo bg-app-color-grey h-10 my-6 rounded-md flex justify-evenly text-white items-center">
            <h3 className='info-item name-volume-i'>name / volume</h3>
            <h3 className='info-item last-price-i'>last price</h3>
            <h3 className='info-item rank-i'>rank</h3>
            <h3 className='info-item change-i'>change(24h)</h3>
     </div>
  )
}
export default ContainerInfo;
