const toggleButton = document.getElementById('toggleButton');
const SpanColor = document.querySelectorAll('.color')
const body = document.querySelector('body')
let valid = false;

toggleButton.addEventListener('click', () => {

    if (valid = !valid) {

        body.style.backgroundImage = 'url(arsset/monstruoso.png)'
        document.querySelector('#btn_hambur').style.backgroundImage='url(arsset/icons8-restaurant-menu-64.png)'
        for (let i = 0; i < SpanColor.length; i++) {
            const boxspan = SpanColor[i];
            boxspan.style.color = "";
        }
    } else if (valid == valid) {
        
        document.querySelector('#btn_hambur').style.backgroundImage='url(arsset/icons8-restaurant-black.png)'
        body.style.backgroundImage = 'url(arsset/monstruoso-vegan.png)';
        for (let i = 0; i < SpanColor.length; i++) {
            const boxspan = SpanColor[i];
            boxspan.style.color = "#FFFF00";
        }

    }

});
