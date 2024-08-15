import "./App.css";
import hamburgericon from "../src/assets/hamburger.png"
import searchicon from "../src/assets/search.png"
import staricon from "../src/assets/star-inside-circle.png"

function App() {
  return (
    <>
      <div>
        <header>
          <div class="logo">
            <div className="round-logo">
              
            </div>
          </div>
          <nav>
            <img src={searchicon} style={{width:"30px",paddingRight:"30px"}} />
            <div class="menu-icon">
              <img src={hamburgericon} alt="" style={{width:"30px"}} />
            </div>
          </nav>
        </header>

        <main>
          <section class="top-label">
            <div className="top"><h3>#Top</h3></div>
            
          </section>

          <section class="main-heading">
            <h1>A Responsibly As Teach Leading, Global Company</h1>
            <p>Creating Superior Products & Services</p>
          </section>

          <section class="ratings">
            <div class="rating-details">
              <div className="star">
                <img src={staricon}  className="staricon" style={{width:"40px"}} />
              </div>
              <div className="pilot"><strong>Trust Pilot</strong>
              <p>
                Rated Best <span>12.6K Reviews</span>
              </p></div>
              
            </div>
          </section>

          <section class="interactive-content">
            <div class="video-placeholder">
              <button>Play</button>
            </div>
            <div class="stats">
              <div class="stat">
                <p>72%</p>
              </div>
              <div class="stat">
                <p>28%</p>
              </div>
            </div>
          </section>

          <section class="actions">
            <button class="signup-btn">Signup to Get 50% OFF</button>
            <button class="explore-btn">Explore New Products</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
