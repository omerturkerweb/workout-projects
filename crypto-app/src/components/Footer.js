import React from 'react'

function Footer() {
  return (
    <div className='Footer my-8 w-screen mx-auto h-40 absolute left-0 bg-app-footer'>
          <div className=' api-key absolute top-14 left-80 '>
          <i className="fa-solid fa-key"></i> api => <a href='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'><span className='text-white text-sm'>https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false</span></a>
          </div>
          <div className="social absolute top-2 right-10">
          <a href='https://github.com/omerturkerweb'><i className="fa-brands fa-github text-5xl text-black hover:drop-shadow-app-social rounded-3xl transition-all cursor-pointer"></i></a>
          <a href='https://twitter.com/omerturkerweb'><i className="fa-brands fa-twitter text-5xl text-black hover:drop-shadow-app-social rounded-3xl transition-all cursor-pointer"></i></a>
          <a href='https://www.linkedin.com/in/%C3%B6mer-t%C3%BCrker-44a28124b/'><i className="fa-brands fa-linkedin text-5xl text-black hover:drop-shadow-app-social rounded-3xl transition-all cursor-pointer"></i></a>
          </div>
    </div>
  )
}
export default Footer;