import { useState } from "react";
import revenue from "../src/assets/arrow-upper-right.png";
import order from "../src/assets/shopping-cart.png";
import dine_in from "../src/assets/kitchen-accessories.png";
import take_away from "../src/assets/coffee.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="widget">
        <div class="card">
          <div className="container">
            <h3 style={{ fontSize: "20px" }}>Revenue</h3>
            <div class="change down">
              <span class="icon">⬇</span>
              <span>10%</span>
            </div>
          </div>
          <div className="image">
            <img src={revenue} className="img" />
            <div class="value">$2,047</div>
          </div>
        </div>
        <div class="card">
          <div className="container">
            <h3 style={{ fontSize: "20px" }}>Orders</h3>
            <div class="change up">
              <span class="icon">⬆</span>
              <span>20%</span>
            </div>
          </div>
          <div className="image">
            <img src={order} className="img" />
            <div class="value">356</div>
          </div>
        </div>
        <div class="card">
          <div className="container">
            <h3 style={{ fontSize: "20px" }}>Orders</h3>
            <div class="change up">
              <span class="icon">⬆</span>
              <span>10%</span>
            </div>
          </div>
          <div className="image">
            <img src={dine_in} className="img" />
            <div class="value">220</div>
          </div>
        </div>

        <div class="card">
          <div className="container">
            <h3 style={{ fontSize: "20px" }}>Take Away</h3>
            <div class="change down">
              <span class="icon">⬇</span>
              <span>5%</span>
            </div>
          </div>
          <div className="image">
            <img src={take_away} className="img" />
            <div class="value">135</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
