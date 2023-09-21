import chickenImage from './assets/grilled-chicken.jpg';
import fondantImage from './assets/fondant.jpg';
import ravioliImage from './assets/ravioli.jpg';
import risottoImage from './assets/risotto.jpg';
import tacosImage from './assets/tacos.jpg';
import tunaImage from './assets/tuna-salad.jpg';

const Dish = (dishName, description, image) => {
    return {
        dishName,
        description,
        image,
    };
}

const menu = [
    Dish(
        "Mediterranean Grilled Chicken",
        "Tender chicken marinated in a blend of Mediterranean spices, grilled to perfection, and served with a side of lemon-infused couscous and a refreshing cucumber yogurt sauce.",
        chickenImage
    ),
    Dish(
        "Gourmet Mushroom Risotto",
        "Creamy Arborio rice cooked with a medley of gourmet mushrooms, white wine, and Parmesan cheese, creating a rich and comforting dish that's a celebration of earthy flavors.",
        risottoImage
    ),
    Dish(
        "Seared Sesame Tuna Salad",
        "Sesame-crusted Ahi tuna seared to a delicate rare, placed atop a bed of mixed greens, julienned vegetables, and a zesty ginger soy dressing.",
        tunaImage
    ),
    Dish(
        "Butternut Squash Ravioli",
        "Homemade ravioli filled with roasted butternut squash and ricotta cheese, drizzled with sage-infused brown butter and garnished with toasted pine nuts.",
        ravioliImage
    ),
    Dish(
        "Braised Short Rib Tacos",
        "Slow-cooked beef short ribs shredded and nestled in warm corn tortillas, topped with pickled red onions, fresh cilantro, and a tangy avocado crema.",
        tacosImage
    ),
    Dish(
        "Decadent Chocolate Fondant",
        "Indulge in a warm and gooey chocolate fondant dessert, served with a scoop of vanilla bean ice cream and a drizzle of raspberry coulis.",
        fondantImage
    )
]

function renderMenuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    menu.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        const detailsDiv = document.createElement('div');

        const name = document.createElement('h1');
        name.textContent = dish.dishName;
        detailsDiv.appendChild(name);

        const descr = document.createElement('p');
        descr.textContent = dish.description;
        detailsDiv.appendChild(descr);

        dishDiv.appendChild(detailsDiv);

        const dishImg = document.createElement('img');
        dishImg.src = dish.image;
        dishDiv.appendChild(dishImg);

        menuDiv.appendChild(dishDiv);
    })

    return menuDiv;
}

export default renderMenuPage;
