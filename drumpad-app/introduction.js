window.onload = ()=> {

    const drumKit = {
    hiphop:
    [
      {
        name:"pad1",
        volume:1,
        src : "./audios/hh/sn1.mp3"
      },
      {
        name:"pad2",
        volume:1,
        src : "./audios/hh/sn2.mp3"
      },
       {
        name:"pad3",
        volume:1,
        src : "./audios/hh/sn3.mp3"
      },
       {
        name:"pad4",
        volume:1,
        src : "./audios/hh/sn4.mp3"
      },
      {
        name:"pad5",
        volume:1,
        src : "./audios/hh/hh1.mp3"
      },
      {
        name:"pad6",
        volume:1,
        src : "./audios/hh/hh2.mp3"
      },
      {
        name:"pad7",
        volume:1,
        src : "./audios/hh/hh3.mp3"
      },
      {
        name:"pad8",
        volume:1,
        src : "./audios/hh/hh4.mp3"
      },
      {
        name:"pad9",
        volume:1,
        src : "./audios/hh/kk1.mp3"
      },
      {
        name:"pad10",
        volume:1,
        src : "./audios/hh/kk2.mp3"
      },
      {
        name:"pad11",
        volume:1,
        src : "./audios/hh/kk3.mp3"
      },
      {
        name:"pad12",
        volume:1,
        src : "./audios/hh/kk4.mp3"
      },
      {
        name:"pad13",
        volume:1,
        src : "./audios/hh/cl1.mp3"
      },
      {
        name:"pad14",
        volume:1,
        src : "./audios/hh/cl2.mp3"
      },
      {
        name:"pad15",
        volume:1,
        src : "./audios/hh/cl3.mp3"
      },
      {
        name:"pad16",
        volume:1,
        src : "./audios/hh/cl4.mp3"
      }
    ],
    classic_drum : [
       {
        name:"pad1",
        volume:1,
        src : "./audios/cd/sn1.mp3"
      },
      {
        name:"pad2",
        volume:1,
        src : "./audios/cd/sn2.mp3"
      },
       {
        name:"pad3",
        volume:1,
        src : "./audios/cd/sn3.mp3"
      },
       {
        name:"pad4",
        volume:1,
        src : "./audios/cd/sn4.mp3"
      },
      {
        name:"pad5",
        volume:1,
        src : "./audios/cd/hh1.mp3"
      },
      {
        name:"pad6",
        volume:1,
        src : "./audios/cd/hh2.mp3"
      },
      {
        name:"pad7",
        volume:1,
        src : "./audios/cd/hh3.mp3"
      },
      {
        name:"pad8",
        volume:1,
        src : "./audios/cd/hh4.mp3"
      },
      {
        name:"pad9",
        volume:1,
        src : "./audios/cd/kk1.mp3"
      },
      {
        name:"pad10",
        volume:1,
        src : "./audios/cd/kk2.mp3"
      },
      {
        name:"pad11",
        volume:1,
        src : "./audios/cd/kk3.mp3"
      },
      {
        name:"pad12",
        volume:1,
        src : "./audios/cd/kk4.mp3"
      },
      {
        name:"pad13",
        volume:1,
        src : "./audios/cd/bs1.mp3"
      },
      {
        name:"pad14",
        volume:1,
        src : "./audios/cd/bs2.mp3"
      },
      {
        name:"pad15",
        volume:1,
        src : "./audios/cd/bs3.mp3"
      },
      {
        name:"pad16",
        volume:1,
        src : "./audios/cd/bs4.mp3"
      }
     
    ]
    
} 

const keyInfo = {
    keys : [
        '4',
        '5',
        '6',
        '7',
        'r',
        't',
        'y',
        'u',
        'f',
        'g',
        'h',
        'j',
        'v',
        'b',
        'n',
        'm'
    ],
    keyCode : [
        '52',
        '53',
        '54',
        '55',
        '82',
        '84',
        '89',
        '85',
        '70',
        '71',
        '72',
        '74',
        '86',
        '66',
        '78',
        '77'
    ]
}


let pad_area= document.querySelector(".pad-area");

for (let i = 0; i<16; i++){
  pad_area.innerHTML += 
    `
    <div class="pad${i+1}  pad-style pad-color1 p-3 pad-ready">
     <span class="pad-key-info key-${keyInfo["keys"][i]}"> ${keyInfo["keys"][i].toUpperCase()} </span>
     <div class="pad-inner pad-inner-${i+1}"></div>
    </div>   

    `;  
}





    let drumSelect = document.querySelector(".drum-kits-select");
    let choosen = null;
    let bigContainer = document.querySelector(".big-container");
    let alertContainer = document.querySelector(".alert-container");
    let alertSelect = document.querySelector(".key-select-alert");


        window.addEventListener("keydown",(key)=>{



        switch (key.keyCode) {

        case 52:
        function key52fnc ()
         {
            
            var key4 = new Audio(drumKit['hiphop'][0]['src']);
             key4.volume = drumKit['hiphop'][0]['volume'];
             key4.play();
             document.querySelector(".pad-inner-1").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
         }
            if (drumSelect.value == 'hiphop') key52fnc(); 
                
           
          

        break;

        case 53:
        function key53fnc ()
         {
            var key5 = new Audio(drumKit['hiphop'][1]['src']);
             key5.volume = drumKit['hiphop'][1]['volume'];
             key5.play();
             document.querySelector(".pad-inner-2").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
            if (drumSelect.value == 'hiphop') key53fnc();    
        break;

        case 54:
        function key54fnc ()
         {
            var key6 = new Audio(drumKit['hiphop'][2]['src']);
             key6.volume = drumKit['hiphop'][2]['volume'];
             key6.play();
              document.querySelector(".pad-inner-3").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active'); 
         }
            if (drumSelect.value == 'hiphop') key54fnc();    
        break;

        case 55: 
        function key55fnc ()
         {
            var key7 = new Audio(drumKit['hiphop'][3]['src']);
             key7.volume = drumKit['hiphop'][3]['volume'];
             key7.play();
           document.querySelector(".pad-inner-4").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
         }
            if (drumSelect.value == 'hiphop') key55fnc();   
        break;

        case 82:  
        function key82fnc ()
         {
            var keyR = new Audio(drumKit['hiphop'][4]['src']);
             keyR.volume = drumKit['hiphop'][4]['volume'];
             keyR.play();
           document.querySelector(".pad-inner-5").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
            if (drumSelect.value == 'hiphop') key82fnc();  
        break;

        case 84:  
        function key84fnc ()
         {
            var keyT = new Audio(drumKit['hiphop'][5]['src']);
             keyT.volume = drumKit['hiphop'][5]['volume'];
             keyT.play();
             document.querySelector(".pad-inner-6").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
           if (drumSelect.value == 'hiphop')  key84fnc();  
        break;

        case 89: 
        function key89fnc ()
         {
            var keyY = new Audio(drumKit['hiphop'][6]['src']);
             keyY.volume = drumKit['hiphop'][6]['volume'];
             keyY.play();
           document.querySelector(".pad-inner-7").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
            if (drumSelect.value == 'hiphop') key89fnc();   
        break;

        case 85:  
        function key85fnc ()
         {
            var keyU = new Audio(drumKit['hiphop'][7]['src']);
             keyU.volume = drumKit['hiphop'][7]['volume'];
             keyU.play();
           document.querySelector(".pad-inner-8").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
         }
            if (drumSelect.value == 'hiphop') key85fnc();  
        break;

        case 70: 
        function key70fnc ()
         {
            var keyF = new Audio(drumKit['hiphop'][8]['src']);
             keyF.volume = drumKit['hiphop'][8]['volume'];
             keyF.play();
        document.querySelector(".pad-inner-9").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
            if (drumSelect.value == 'hiphop') key70fnc();   
        break;

        case 71:    
        function key71fnc ()
         {
            var keyG = new Audio(drumKit['hiphop'][9]['src']);
             keyG.volume = drumKit['hiphop'][9]['volume'];
             keyG.play();
              document.querySelector(".pad-inner-10").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
           if (drumSelect.value == 'hiphop') key71fnc();
        break;

        case 72: 
        function key72fnc ()
         {
            var keyH = new Audio(drumKit['hiphop'][10]['src']);
             keyH.volume = drumKit['hiphop'][10]['volume'];
             keyH.play();
            document.querySelector(".pad-inner-11").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
           if (drumSelect.value == 'hiphop') key72fnc();   
        break;

        case 74:  
        function key74fnc ()
         {
            var keyJ = new Audio(drumKit['hiphop'][11]['src']);
             keyJ.volume = drumKit['hiphop'][11]['volume'];
             keyJ.play();
             document.querySelector(".pad-inner-12").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
           if (drumSelect.value == 'hiphop') key74fnc();  
        break;

        case 86:   
        function key86fnc ()
         {
            var keyV = new Audio(drumKit['hiphop'][12]['src']);
             keyV.volume = drumKit['hiphop'][12]['volume'];
             keyV.play();
         document.querySelector(".pad-inner-13").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active'); 
         }
            if (drumSelect.value == 'hiphop') key86fnc(); 
        break;

        case 66:  
        function key66fnc ()
         {
            var keyB = new Audio(drumKit['hiphop'][13]['src']);
             keyB.volume = drumKit['hiphop'][13]['volume'];
             keyB.play();
            document.querySelector(".pad-inner-14").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');
         }
           if (drumSelect.value == 'hiphop') key66fnc();  
        break;

        case 78:  
        function key78fnc ()
         {
            var keyN = new Audio(drumKit['hiphop'][14]['src']);
             keyN.volume = drumKit['hiphop'][14]['volume'];
             keyN.play();
              document.querySelector(".pad-inner-15").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active'); 
         }
           if (drumSelect.value == 'hiphop') key78fnc();  
        break;

        case 77:  
        function key77fnc ()
         {
            var keyM = new Audio(drumKit['hiphop'][15]['src']);
             keyM.volume = drumKit['hiphop'][15]['volume'];
             keyM.play();
         document.querySelector(".pad-inner-16").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active'); 
         }
         if (drumSelect.value == 'hiphop')   key77fnc();  
        break;





        default:
        break;
    }
});


       

   


    
 
 

    let padsReady = document.querySelectorAll(".pad-ready");
    let padsKeyInfo = document.querySelectorAll(".pad-key-info");

    function openAKeyArea(statu) { // 1 open 0 close
        if(statu == 1) {

                alertContainer.style.display = 'block';
                alertSelect.style.display = 'block';
                bigContainer.classList.add("big-container-active");
                alertSelect.classList.add("key-select-alert-active");
         
                

       
        
        }
        else if (statu == 0)  {
                alertContainer.style.display = 'none';
                alertSelect.style.display = 'none';
                bigContainer.classList.remove("big-container-active");
                alertSelect.classList.remove("key-select-alert-active");

        }
    }



    function contains2(str){
        let res = false;
        for(let i = 0; i < customPadsValues.length; i++){
            if(customPadsValues[i]==str){
                res = true;
                break;
            }
        }
        return res;
    }

    function clickedCustomPad(sender) {
        if(customPadsValues[sender]==null)
        openAKeyArea(1);

        $(window).on("keypress",(e) => {
            let kLetter = (String.fromCharCode(e.keyCode)).toUpperCase();
            if(customPadsValues[sender]==null){
                if(!contains2(kLetter)){
                    customPadsValues[sender] = kLetter;
                    padsKeyInfo[sender].innerHTML = kLetter;
                    console.log(customPadsValues);
                    openAKeyArea(0);
                }else{
                    alert("bu tuş başka pad de ayarlı");
                }
            }
        });
    }
  
   
    let customPadsValues = [];

    $(drumSelect).on("change",()=>{
        if (drumSelect.value== 'hiphop') {


         for(let i=0; i<16; i++){padsReady[i].classList.remove("pad-custom"); padsReady[i].classList.add("pad-ready"); padsKeyInfo[i].classList.remove("pad-key-info-custom"); padsKeyInfo[i].innerHTML =`${keyInfo["keys"][i].toUpperCase()}`; }

     }
        if(drumSelect.value == 'custom') {

            function keyInner(j){
                if (customPadsValues[j] == null) {
                    return "...";
                }else return customPadsValues[j];
            }

            for(let i=0; i<16; i++ ){padsReady[i].classList.add("pad-custom"); padsReady[i].classList.remove("pad-ready"); padsKeyInfo[i].classList.add("pad-key-info-custom"); padsKeyInfo[i].innerHTML = keyInner(i);}

                let customPads = document.querySelectorAll(".pad-custom");

            for(let j=0; j<16; j++){
                

                customPads[j].addEventListener("click",()=>{
                    clickedCustomPad(j);
                });

 
            }           
         }
    }); 
     


    window.addEventListener("keydown",(key)=>{
                let StringB = String.fromCharCode(key.keyCode);
            switch (StringB){
                case customPadsValues[0]:
                    function customKey1 ()
                    {
            
            var key1 = new Audio(drumKit['hiphop'][0]['src']);
             key1.volume = drumKit['hiphop'][0]['volume'];
             key1.play();
             document.querySelector(".pad-inner-1").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey1(); 
            break;



               case customPadsValues[1]:
                function customKey2 ()
                    {
            
            var key2 = new Audio(drumKit['hiphop'][1]['src']);
             key2.volume = drumKit['hiphop'][1]['volume'];
             key2.play();
             document.querySelector(".pad-inner-2").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey2(); 
                break;




                case customPadsValues[2]:
                function customKey3 ()
                    {
            
            var key3 = new Audio(drumKit['hiphop'][2]['src']);
             key3.volume = drumKit['hiphop'][2]['volume'];
             key3.play();
             document.querySelector(".pad-inner-3").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey3(); 
                break;



                case customPadsValues[3]:
                function customKey4 ()
                    {
            
            var key4 = new Audio(drumKit['hiphop'][3]['src']);
             key4.volume = drumKit['hiphop'][3]['volume'];
             key4.play();
             document.querySelector(".pad-inner-4").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey4(); 
                break;




                case customPadsValues[4]:
                function customKey5 ()
                    {
            
            var key5 = new Audio(drumKit['hiphop'][4]['src']);
             key5.volume = drumKit['hiphop'][4]['volume'];
             key5.play();
             document.querySelector(".pad-inner-5").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey5(); 
                break;



                case customPadsValues[5]:
                function customKey6 ()
                    {
            
            var key6 = new Audio(drumKit['hiphop'][5]['src']);
             key6.volume = drumKit['hiphop'][5]['volume'];
             key6.play();
             document.querySelector(".pad-inner-6").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey6(); 
                break;




                case customPadsValues[6]:
                function customKey7 ()
                    {
            
            var key7 = new Audio(drumKit['hiphop'][6]['src']);
             key7.volume = drumKit['hiphop'][6]['volume'];
             key7.play();
             document.querySelector(".pad-inner-7").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey7(); 
                break;



                case customPadsValues[7]:
                function customKey8 ()
                    {
            
            var key8 = new Audio(drumKit['hiphop'][7]['src']);
             key8.volume = drumKit['hiphop'][7]['volume'];
             key8.play();
             document.querySelector(".pad-inner-8").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey8(); 
                break;




                case customPadsValues[8]:
                function customKey9 ()
                    {
            
            var key9 = new Audio(drumKit['hiphop'][8]['src']);
             key9.volume = drumKit['hiphop'][8]['volume'];
             key9.play();
             document.querySelector(".pad-inner-9").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey9(); 
                break;




                case customPadsValues[9]:
                function customKey10 ()
                    {
            
            var key10 = new Audio(drumKit['hiphop'][9]['src']);
             key10.volume = drumKit['hiphop'][9]['volume'];
             key10.play();
             document.querySelector(".pad-inner-10").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey10(); 
                break;



                case customPadsValues[10]:
                function customKey11 ()
                    {
            
            var key11 = new Audio(drumKit['hiphop'][10]['src']);
             key11.volume = drumKit['hiphop'][10]['volume'];
             key11.play();
             document.querySelector(".pad-inner-11").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey11(); 
                break;




                case customPadsValues[11]:
                function customKey12 ()
                    {
            
            var key12 = new Audio(drumKit['hiphop'][11]['src']);
             key12.volume = drumKit['hiphop'][11]['volume'];
             key12.play();
             document.querySelector(".pad-inner-12").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey12(); 
                break;




                case customPadsValues[12]:
                function customKey13 ()
                    {
            
            var key13 = new Audio(drumKit['hiphop'][12]['src']);
             key13.volume = drumKit['hiphop'][12]['volume'];
             key13.play();
             document.querySelector(".pad-inner-13").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey13(); 
                break;




                case customPadsValues[13]:
                function customKey14 ()
                    {
            
            var key14 = new Audio(drumKit['hiphop'][13]['src']);
             key14.volume = drumKit['hiphop'][13]['volume'];
             key14.play();
             document.querySelector(".pad-inner-14").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey14(); 
                break;




                case customPadsValues[14]:
                function customKey15 ()
                    {
            
            var key15 = new Audio(drumKit['hiphop'][14]['src']);
             key15.volume = drumKit['hiphop'][14]['volume'];
             key15.play();
             document.querySelector(".pad-inner-15").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey15(); 
                break;




                case customPadsValues[15]:
                function customKey16 ()
                    {
            
            var key16 = new Audio(drumKit['hiphop'][15]['src']);
             key16.volume = drumKit['hiphop'][15]['volume'];
             key16.play();
             document.querySelector(".pad-inner-16").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color-active');  
                     }
            if (drumSelect.value == 'custom') customKey16(); 
                break; 

                default:
                    // statements_def
                    break;
            }
    });
         let choosenColor = document.querySelectorAll(".clr-choose");
         let currentColor = null;

         function changeCurrentColor(chosencolorid){
            switch (chosencolorid) {
                case 0:
                currentColor = 1;
   
                    break;
                      case 1:
                currentColor = 2;

                    break;
                      case 2:
                currentColor = 3;
        
                    break;
                default:
                    break;
            }
         }

         for(let i=0; i<3; i++){
            choosenColor[i].addEventListener("click",()=>{
                changeCurrentColor(i); 
                
            });
         
     }

  window.addEventListener("keyup",(key)=>{

    if (drumSelect.value == 'custom' || drumSelect.value == 'hiphop') {
         switch (String.fromCharCode(key.keyCode)) {

        case "4":
        case customPadsValues[0]:
        
        if (currentColor==1) {
             document.querySelector(".pad-inner-1").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-1").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-1").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-1").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       
        break;

        case "5":
        case customPadsValues[1]:  

        if (currentColor==1) {
             document.querySelector(".pad-inner-2").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-2").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-2").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-2").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       
        break;
 
        case "6":
        case customPadsValues[2]: 

        if (currentColor==1) {
             document.querySelector(".pad-inner-3").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-3").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-3").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-3").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "7":
        case customPadsValues[3]:   

        if (currentColor==1) {
             document.querySelector(".pad-inner-4").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-4").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-4").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-4").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;
        
        case "R":
        case customPadsValues[4]:  


        if (currentColor==1) {
             document.querySelector(".pad-inner-5").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-5").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-5").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-5").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "T":
        case customPadsValues[5]:   

        if (currentColor==1) {
             document.querySelector(".pad-inner-6").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-6").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-6").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-6").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "Y":
        case  customPadsValues[6]:

        if (currentColor==1) {
             document.querySelector(".pad-inner-7").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-7").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-7").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-7").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "U":
        case customPadsValues[7]:    

        if (currentColor==1) {
             document.querySelector(".pad-inner-8").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-8").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-8").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-8").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "F":
        case customPadsValues[8]: 



        if (currentColor==1) {
             document.querySelector(".pad-inner-9").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-9").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-9").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-9").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       


        break;

        case "G":
        case customPadsValues[9]:  


        if (currentColor==1) {
             document.querySelector(".pad-inner-10").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-10").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-10").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-10").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "H":
        case  customPadsValues[10]:  


        if (currentColor==1) {
             document.querySelector(".pad-inner-11").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-11").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-11").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-11").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       


        break;

        case "J":
        case customPadsValues[11]:    


        if (currentColor==1) {
             document.querySelector(".pad-inner-12").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-12").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-12").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-12").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       

        break;

        case "V":
        case customPadsValues[12]:    

        if (currentColor==1) {
             document.querySelector(".pad-inner-13").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-13").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-13").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-13").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       


        break;

        case "B":
        case customPadsValues[13]:    

        if (currentColor==1) {
             document.querySelector(".pad-inner-14").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-14").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-14").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-14").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       


        break;

        case "N":
        case customPadsValues[14]:    

            if (currentColor==1) {
             document.querySelector(".pad-inner-15").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-15").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-15").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-15").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       



        break;

        case "M":
        case customPadsValues[15]:    

      if (currentColor==1) {
             document.querySelector(".pad-inner-16").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');  
              }
        else if(currentColor==2){
            document.querySelector(".pad-inner-16").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }   
        else if(currentColor == 3){
            document.querySelector(".pad-inner-16").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        else document.querySelector(".pad-inner-16").style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color1');
       


        break;





        default:
            // statements_def
            break;
    }
    }
   
});



function changeColor(colorid){
    switch (colorid) {
        case 0:
        for(let i = 0; i<16; i++) {
            document.querySelectorAll(".pad-style")[i].style.outline = `1px solid ${window.getComputedStyle(document.documentElement).getPropertyValue('--color2')}`
              document.querySelectorAll(".pad-inner")[i].style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color2');
        }
  
        break;

        case 1:
    for(let i = 0; i<16; i++) {
            document.querySelectorAll(".pad-style")[i].style.outline = `1px solid ${window.getComputedStyle(document.documentElement).getPropertyValue('--color3')}`
              document.querySelectorAll(".pad-inner")[i].style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color3');
        }

        break;

        case 2:
      for(let i = 0; i<16; i++) {
            document.querySelectorAll(".pad-style")[i].style.outline = `1px solid ${window.getComputedStyle(document.documentElement).getPropertyValue('--color4')}`
              document.querySelectorAll(".pad-inner")[i].style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--color4');
        }
        break;

        default:
            // statements_def
            break;
    }
}



  for(let i =0; i<3; i++){
    choosenColor[i].addEventListener("click",()=>{
        changeColor(i);
    })
        
 }
  }

