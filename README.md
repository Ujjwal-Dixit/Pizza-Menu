# Pizza Menu Web Page

This is a simple React code for a pizza menu web page. The code displays a menu of pizzas with their names, ingredients, prices, and availability. It also includes a header and a footer that show the opening hours of the pizza company. This is a part of practice project from [Jonas' React Course](https://www.udemy.com/course/the-ultimate-react-course/)

## Pizza Data

The pizza data is stored in the `pizzaData` array, which contains objects representing each pizza. Each pizza object has the following properties:

- `name`: The name of the pizza.
- `ingredients`: The ingredients used in the pizza.
- `price`: The price of the pizza.
- `photoName`: The file name of the pizza's photo.
- `soldOut`: A boolean value indicating whether the pizza is sold out or not.

## Components

The code is organized into several components:

- `App`: The main component that renders the entire pizza company web page.
- `Header`: Renders the header section of the web page, displaying the name of the pizza company.
- `Menu`: Renders the menu section, displaying the list of pizzas.
- `Pizza`: Renders an individual pizza item with its details.
- `Footer`: Renders the footer section, displaying the opening hours of the pizza company.
- `Order`: Renders the order section with opening hours and an order button.
