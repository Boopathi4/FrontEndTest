import Aokiji from "../src/assets/pexels-italo-melo-881954-2379005.jpg";
import Kizaru from "../src/assets/pexels-simon-robben-55958-614810.jpg";
import Akainu from "../src/assets/pexels-nkhajotia-1516680.jpg";
import "./App.css";

function App() {
  return (
    <>
    <div className="maincontainer">
    <div className="container">
        <div className="header">
          <h1>Last Transaction</h1>
          <a href="#">See All</a>
        </div>
        <div className="card">
          <img src={Aokiji} />
          <div className="details">
            <span className="name">Aokiji</span>
            <span className="date">28 Feb 2023 •6.23PM</span>
          </div>
          <div className="transfer"><div className="amount received">+$13.00</div>
          <div className="status">Received</div></div>
          
        </div>
        <div className="card">
          <img src={Kizaru} />
          <div className="details">
            <span className="name">Kizaru</span>
            <span className="date">28 Feb 2023 •6.23PM</span>
          </div>
          <div className="trasnfer"> <div className="amount transfered">-$9.00</div>
          <div className="status">Outgoing</div></div>
         
        </div>
        <div className="card">
          <img src={Akainu} />
          <div className="details">
            <span className="name">Akainu</span>
            <span className="date">28 Feb 2023 •6.23PM</span>
          </div>
          <div className="tranfer"><div className="amount received">+$20.00</div>
          <div className="status">Received</div></div>
          
        </div>
      </div>
    </div>
      
    </>
  );
}

export default App;
