let products = {
        data: [
        {
            productName: "Regular White T-Shirt",
            category: "Tops",
            price: "30",
            image: "images/white-t.png"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottoms",
            price: "49",
            image: "images/short-skirt.png"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Accessories",
            price: "99",
            image: "images/watch.png"
        },
        {
            productName: "Dark Green Knitted Sweater",
            category: "Tops",
            price: "29",
            image: "images/knitted-top.png"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jackets",
            price: "129",
            image: "images/leather-jacket.png"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottoms",
            price: "89",
            image: "images/pink-pants.png"
        },
        {
            productName: "Brown Faux Fur Jacket",
            category: "Jackets",
            price: "99",
            image: "images/brown-jacket.png"
        },
        {
            productName: "Comfy Grey Pants",
            category: "Bottoms",
            price: "49",
            image: "images/grey-sweatpants.png"
        },

    ],

};

for(let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer= document.createElement("div");
    imgContainer.classList.add("image-conatiner");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName;
    container.appendChild(name);

    let price = document.createElement("h4");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll("button-value");
    buttons.forEach(buttons => {
        if(value.toUppercase() == buttons.innerText.toUppercase()) {
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if(value == "All") {
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchProducts();
    }
});

document.getElementById("search").addEventListener("click", () => {
    searchProducts();
});

function searchProducts() {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
}

window.onload = () => {
    filterProduct("All");
}