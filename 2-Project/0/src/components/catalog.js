// const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
// const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

//
const catalog = {
    items: [],
    basket: null,
    container: null,
    imgFTPurl: 'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop',
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
    init() {
        this.container = document.querySelector('#catalog');
        this.basket = basket;
        // this.items = getItems();
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })

        // this._handleEvents();
    },
    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    },
    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                let item = {
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                };
                this.basket.add(item)
            }
        })
    },
    _render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/featuredItem${index + 1}.jpg`;
            htmlStr += `
            <div class="hot-offer">
                <div class="hot-offer__shadow">
                    <img src="${imgURL}" alt="t-shirt">
                    <div class="hot-offer__hover">
                        <div class="hot-offer__square">
                            <button 
                                name="add"
                                data-id="${item.productId}"
                                data-name="${item.productName}"
                                data-img="${imgURL}"
                                data-price="${item.productPrice}"
                            ><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <a href="single.html">${item.productName}</a>
                <h3>
                    $${item.productPrice}
                    <!--stars-->
                </h3>
            </div>
            `;
        });
        this.container.innerHTML = htmlStr;
    }
}


{/* <div class="hot-offer__stars">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div> class half-star
</div> */}

catalog.init();
//

// function createNewItem(name, price) {
//     return {
//         productName: name,
//         productPrice: price
//     }
// }

// function getItems() {
//     return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES [index]));
// }