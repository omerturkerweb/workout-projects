import React from 'react'


 function Header() {
      const HeaderImage = () => {
            return(
              <>
                <div className="HeaderImage ">
                <i className="fa-brands fa-btc text-7xl mt-5 text-stone-400"></i>
                </div>
              </>
            )
      }
      const HeaderTitles = () => {
        return(
          <div className="HeaderTitles flex-col justify-center items-center text-center text-white">
            <h3 className='font-mono'>WELCOME</h3>
            <p className='font-mono text-app-half-passive'>coin market crypto</p>
           </div>
        )
      
            
      }
      const HeaderMenu = () => {
          return(
            <div className="HeaderMenu flex  text-white justify-center content-center">
              <a className='mx-3 menu-item  p-2 border-b-2' href='#'>home</a>
              <a className='mx-3 menu-item p-2 text-app-half-passive border-b border-gray-400 hover:text-white hover:border-b-2  transition-all' href='#'>about</a>
              <a className='mx-3 menu-item p-2 text-app-half-passive border-b border-gray-400 hover:text-white hover:border-b-2 transition-all' href='#'>contact</a>
              <div className="bars-mobil text-5xl  mr-10 invisible transition-all opacity-0"><i className="fa-solid fa-bars"></i></div>
            </div>
          )
      }

  return (
          <div className='Header flex justify-between my-5 items-center'>
            <HeaderImage/>
            <HeaderTitles/>
            <HeaderMenu/>
          </div>
  )
}

export default Header;
