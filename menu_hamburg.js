


function ActionHamburg() { 
   
   let Option_Hamburg = document.querySelector('.ConteinerButtons')
   let Img_Button = document.querySelector('#btn_hambur') 

   Option_Hamburg.style.display = "block"
   Option_Hamburg.style.opacity = "0.9"
   Img_Button.style.display = "none"


   if (window.innerWidth < 660) {
   
      document.querySelector('.ConteinerButtons').addEventListener('click', () => {
              let options = document.querySelectorAll('.color');
 
      for (let i = 0; i < options.length; i++) {
             document.querySelector('.ConteinerButtons').style.display = "none"
             let Img_Button = document.querySelector('#btn_hambur') 
             Img_Button.style.display = "block"
             
    }
   
 })} else if(window.innerWidth > 661){
   location.reload();
            
    }

}






// window.addEventListener('resize', function(){
   
//    if (window.innerWidth < 599) {
          
//     this.alert('menor')
//    } else if(window.innerWidth > 600) {
//       this.alert('maior')

      
//    }

// })
































