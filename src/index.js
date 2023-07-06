import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Zesty Pizza Hut Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (  //? Passing the props inside 'Pizza' component
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authenticate Italian cusine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later :)</p>}
    </main>
  )
}

function Pizza({ pizzaObject }) {

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      {/* < className={pizzaObject.soldOut ? "pizza sold-out" : "pizza"}>
       */}
      <img src={pizzaObject.photoName} alt={pizzaObject.photoName}></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
      </div>
    </li >
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = (hour >= openHour && hour <= closeHour);

  return (
    <footer className="footer">
      {isOpen ? <Order closeHours={closeHour} openHours={openHour} />
        : <p>We're happy to welcome you between {openHour}:00 am and {closeHour}:00 pm</p>}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00 to {closeHours}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>)