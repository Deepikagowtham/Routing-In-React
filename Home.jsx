import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1 style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '50px' }}>Delicious Bites Restaurant</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Welcome to Delicious Bites Restaurant</h2>
          <p>Indulge in the finest culinary experience with our delicious dishes prepared by top chefs.</p>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <h2>Special Dishes</h2>
          <div className="dish-container">
            <div className="dish">
              <img src="https://i.pinimg.com/564x/45/c0/54/45c0549a4c41ed67ff8c8984fbd560e4.jpg" alt="Kimchi Noodles"/>
              <h3>Kimchi Noodles</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/43/f4/11/43f4118d294749ffda6aa5639d617e1b.jpg" alt="Butter Chicken"/>
              <h3>Butter Chicken</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/8e/56/f1/8e56f1ccc13822899f2da8861c3ce86b.jpg" alt="Japanese Raman"/>
              <h3>Japanese Raman</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/95/e7/2d/95e72d4f837a5ec1aa6b3fde6a99783b.jpg" alt="Prawn Biriyani"/>
              <h3>Prawn Biriyani</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="reservation">
        <div className="container">
          <h2>Make a Reservation</h2>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="datetime-local" placeholder="Date and Time"/>
            <textarea placeholder="Special Requests"></textarea>
            <button type="submit" className="btn">Make Reservation</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Delicious Bites Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
