/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: 
    {     
          
          backgroundColor : {
            'app-color-black' : '#212121',
            'app-color-grey' : "#4A4F53",
            'app-green-back' : '#314440',
            'app-red-back'  : '#2F1D20',
            'app-footer' : 'rgba(255, 255, 255, 0.4)'
            
          },
            textColor: {
                'app-rank' :'#7ECFE1',
                'app-green-front' : '#5FBE92',
                'app-red-front' : '#CD524B',
                'app-passive' : 'rgba(83,83,83,255)',
                'app-half-passive' : 'rgba(255, 255, 255, 0.5)'
            },
            fontFamily : {
              'app-font-family' : "font-family: 'Press Start 2P', cursive;"
            },
            boxShadow : {
              'app-green' : '2px 2px 3px #5FBE92',
              'app-red' : ' 2px 2px 3px #CD524B',
              'app-white' : ' 0 0  5px #fff'
            },
            dropShadow : {
              'app-social' : '0 0 5px white'
            },
            minWidth : {
              'app-size' : '750px'
            }
          
    },
  },
  plugins: [],
}
