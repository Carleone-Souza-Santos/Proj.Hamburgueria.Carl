const listoutgoinglist = document.querySelector('ul')
const ExecutForEach = document.querySelector('#PlayForeach')
const ExecutMap = document.querySelector('#eventMap')
const Executreduc = document.querySelector('#PlayReduce')
const ExecutfilterVeget = document.querySelector('#Playfilte')
const ExecutfilDrick = document.querySelector('#Playfilsuco')

// apply foreach with parameter applied to an array element in html
function SelectForeach(All) {
    let card = ""

    All.forEach(product => {

        card += `
                <li>
                        <article class="card">
                            <img class="card__background" src="${product.src}" />
                            <div class="card__content | flow">
                                <div class="card__content--container | flow">
                                    <h2 class="card__title"> ${product.name}</h2>
                                    <p class="card__description">
                                    ${product.descrip}
                                    </p>

                                </div>
                                <button class="card__button">R$ ${product.price.toFixed(2)}</button>
                            </div>
                        </article>

                    </li>
        
        
        `
    }
    );
    listoutgoinglist.innerHTML = card
}

// apply the map to create a copy of the original array changing its applied value with minus 10% 
function SelectMap() {
    const NewOptionsvalue = menuOptions.map((inf) => (({
        ...inf,
        price: inf.price * 0.9,
    })
))

    SelectForeach(NewOptionsvalue)

}

// selecting the array with reduce and applying the counter and adding all the prices in the array
    function SelectReduce() {
        const valorTotal = menuOptions.reduce((acum, valor) => acum + valor.price, 0)

        listoutgoinglist.innerHTML = `
    <h1 style="width:400px">O valor aplicado no estoque das mercadorias R$ ${valorTotal.toFixed(2)}</h1>
   `
}

//is checking if vegan is true, collects it and presents it on the screen with the filter
   function selectburgervegetable() {

        const NewMenuOpt = menuOptions.filter((prodct) => prodct.vegan === true)
        SelectForeach(NewMenuOpt)
}

// is checking whether the database liqui and true
    function SelectDrinks() {
        const DrinksOptions = menuOptions.filter((option) => option.Drink === true)
        SelectForeach(DrinksOptions)

}

ExecutForEach.addEventListener('click', () => SelectForeach(menuOptions))
ExecutMap.addEventListener('click', SelectMap)
Executreduc.addEventListener('click', SelectReduce)
ExecutfilterVeget.addEventListener('click', selectburgervegetable)
ExecutfilDrick.addEventListener('click', SelectDrinks)