var shop = document.getElementById("shop")

let inventory =[
    {
        id: 1, 
        name: 'Casual Shirts',
        img: "images/img-1.jpg", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae?", 
        price: 45 
    }, {
        id: 2, 
        name: 'Formal Shirts',
        img: "images/img-2.jpg", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae?", 
        price: 100 
    },
    {
        id: 3, 
        name: 'Polo Shirts',
        img: "images/img-3.jpg", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae?", 
        price: 25 
    },
    {
        id: 4, 
        name: 'Mens Suits',
        img: "images/img-4.jpg", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae?", 
        price: 100 
    }
]

let generateShopElements = ()=>{
    return (shop.innerHTML = inventory.map((x)=>  {
        return ` 
        <div id="product-id-${x.id}" class="item">
                <img width="200" src=${x.img} alt="casual shirts">
                <div class="details">
                    <h3>${x.name}</h3>
                    <p>${x.desc}</p>
                    <div class="price-quantity">
                        <h2>$${ x.price}</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-lg"></i>
                            <div id="${x.id}" class="quantity">0</div>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('')
)};
generateShopElements();