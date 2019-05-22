const names = ["Пицца гриль с баклажанами", "Пицца Охотничья XXL", "Пицца Охотничья", "Карбонара метровая", "Американо метровая", "Маргарита",
  "Карбонара", "Полло", "Гурмео", "Четыре сыра", "Американо", "Кальцоне", "Баварская", "Диабло", "Овощная", "Баварская метровая", "Берлускони метровая", "Гурмео метровая"
];
const prices = ["269 грн", "249 грн", "120 грн", "329 грн", "329 грн", "85 грн", "159 грн", "129 грн", "165 грн", "145 грн", "149 грн", "115 грн", "139 грн", "159 грн", "89 грн", "309 грн", "289 грн", "319 грн"];
const made = ["Сыр Моцарелла, соус Маринара, соус Барбекю, соус чесночный, майонез, чеснок, колбаски охотничьи, сосиски, перец-гриль, баклажан, помидор, лук репчатый, соль, сахар, петрушкa", "Охотничьи колбаски, молочные колбаски, сыр моцарелла, вешенки, шампиньоны, сладкий лук, перец болгарский, соус BBQ, соус маринара, петрушка", "Охотничьи колбаски, молочные колбаски, сыр моцарелла, вешенки, шампиньоны, сладкий лук, перец болгарский, соус BBQ, соус маринара, петрушкa", "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри", "Соус BBQ, соус маринара, сыр моцарелла, горчица, филе куриное sous-vide, колбаски охотничьи, пепперони, лук конфитюр, кукуруза, перец болгарский", "Соус маринара, помидоры, сыр моцарелла, соус песто", "Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, помидоры черри", "Сыр моцарелла, соус маринара, соус ВВQ, чеснок, ананас, филе куриное sous-vide, перец болгарский", "Соус BBQ, филе куриное sous-vide, ветчина, колбаски охотничьи, пеперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка", "Сливочный соус, сыр моцарелла, сыр дор-блю, сыр чеддер, груша, сыр пармезан, орех грецкий", "Соус BBQ, соус маринара, сыр моцарелла, горчица, филе куриное sous-vide, колбаски охотничьи, пепперони, конфитюр из лука, кукуруза, перец болгарский", "Соус маринара, сыр моцарелла, шампиньоны, сыр дор-блю, помидоры, ветчина, соус песто", "Сыр моцарелла, соус маринара, колбаски мюнхенские, колбаски охотничьи, огурец соленый, горчица, лук репчатый, лук зеленый", "Сыр моцарелла, пепперони, перец чили, перец болгарский, лук репчатый, соус ВВQ,соус чили, петрушка", "Баклажан, вешенки, перец болгарский, помидоры, соус песто, соус маринара", "Сыр моцарелла, соус маринара, колбаски мюнхенские, колбаски охотничьи, огурец соленый, горчица, лук репчатый, лук зеленый", "Сливочный соус из белых грибов, сыр моцарелла, сыр дор-блю, пармезан, шампиньоны, вешенки, соус чесночный, масло трюфельное, петрушка", "Соус BBQ, филе куриное sous-vide, ветчина, колбаски охотничьи, пепперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка"];
let calories = [];
for (let i = 0; i < 18; i++) {
  calories.push(parseInt(Math.random() * 1000) + 1000)
}
let showElements = (containerClass, hasPizzaCont = null, elemClass, hasPizzaPic = null) => {
  let pizzaPic;
  let pizzaCont;
  let elem = document.querySelector('div');
  if (elem)
    elem.parentNode.removeChild(elem);
  let container = document.createElement("div");
  container.setAttribute("class", containerClass);
  for (let i = 0; i < 18; i++) {
    if (hasPizzaCont) {
      pizzaCont = document.createElement("div");
      pizzaCont.setAttribute("style", "display:flex")
      let logo = document.createElement("img");
      logo.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/000/069/322/large_2x/vector-pizza-logo.jpg");
      logo.setAttribute("class", "logo");
      pizzaCont.appendChild(logo);
    }
    let pizza = document.createElement("div");
    pizza.setAttribute("class", elemClass);
    if (hasPizzaPic) {
      pizzaPic = document.createElement("img");
      pizzaPic.setAttribute("src", `img/${i+1}.jpeg`);
      pizzaPic.setAttribute("width", '100%');
    }
    let pizzaName = document.createElement("h2");
    pizzaName.setAttribute("class", "pizzaName");
    let nameText = document.createTextNode(names[i]);
    pizzaName.appendChild(nameText);
    let pizzaMade = document.createElement("p");
    pizzaMade.setAttribute("class", "pizzaMade");
    let madeText = document.createTextNode(made[i]);
    pizzaMade.appendChild(madeText);
    let pizzaCalories = document.createElement("h4");
    pizzaCalories.setAttribute("class", "pizzaCalories");
    let down = document.createElement("div");
    if (containerClass == "pizzas")
      down.setAttribute("class", "priceAndCaloriesGrid");
    let caloriesText = document.createTextNode(calories[i] + " ккал");
    pizzaCalories.appendChild(caloriesText);
    let pizzaPrice = document.createElement("h4");
    pizzaPrice.setAttribute("class", "pizzaPrice");
    let priceText = document.createTextNode(prices[i]);
    pizzaPrice.appendChild(priceText);
    down.appendChild(pizzaCalories);
    down.appendChild(pizzaPrice);
    if (hasPizzaPic)
      pizza.appendChild(pizzaPic);
    pizza.appendChild(pizzaName);
    pizza.appendChild(pizzaMade);
    pizza.appendChild(down);
    if (hasPizzaCont) {
      pizzaCont.appendChild(pizza);
      container.appendChild(pizzaCont);
    }
    if (hasPizzaPic)
      container.appendChild(pizza);
  }
  if (!document.querySelector(containerClass))
    document.getElementsByTagName("main")[0].after(container);
}

function displayGrid() {
  showElements("pizzas", false, "pizza", true);
}

function displayList() {
  showElements("pizzasList", true, "pizzaListItem", false);
}