import Algoritham from "../src/assets/algorithm.png";
import Webdevelop from "../src/assets/app-development.png";
import Datascience from "../src/assets/data-science.png";
import Uiux from "../src/assets/ui.png";
import Projectmanage from "../src/assets/planning.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="Mycourse">
            <h1>My Course</h1>
          </div>
          <div className="view_all">
            <h2>View All</h2>
          </div>
        </div>
        <div className="grid_container">
          <div className="grid_item">
            <h3>Course Name</h3>
          </div>
          <div className="grid_item">
            <h3>Start Date</h3>
          </div>
          <div className="grid_item">
            <h3>Lesson Completed</h3>
          </div>
          <div className="grid_item">
            <h3>Duration</h3>
          </div>
          <div className="grid_item">
            <div className="img">
              <img src={Algoritham} className="image" />
              <h3>Basic Algoritham</h3>
            </div>

            <span>25Lessons</span>
          </div>
          <div className="grid_item">27 Jan ,2023</div>
          <div className="grid_item">10/25(48%)</div>
          <div className="grid_item">14h 38m 56s</div>
          <div className="grid_item">
            <div className="img">
              <img src={Webdevelop} alt="" className="image" />
              <h3>Web Development</h3>
            </div>

            <span>45 Lessons</span>
          </div>
          <div className="grid_item">23 Feb,2023</div>
          <div className="grid_item">40/45(97%)</div>
          <div className="grid_item">36hh 30m 00s</div>
          <div className="grid_item">
            <div className="img">
              {" "}
              <img src={Datascience} alt="" className="image" />
              <h3>Basic Data Science</h3>
            </div>

            <span>37 Lessons</span>
          </div>
          <div className="grid_item">14 Jan,2023</div>
          <div className="grid_item">9/37(40%)</div>
          <div className="grid_item">37hh 00m 00s</div>
          <div className="grid_item">
            <div className="img">
              <img src={Uiux} alt="" className="image" />
              <h3>UI/UX Design</h3>
            </div>

            <span>32 Lessons</span>
          </div>
          <div className="grid_item">19 Feb,2023</div>
          <div className="grid_item">26/32(84%)</div>
          <div className="grid_item">16h 40m 50s</div>
          <div className="grid_item">
            <div className="img">
              {" "}
              <img src={Projectmanage} alt="" className="image" />
              <h3>Project Management</h3>
            </div>

            <span>19 Lessons</span>
          </div>
          <div className="grid_item">27 Jan ,2023</div>
          <div className="grid_item">14/19(89%)</div>
          <div className="grid_item">13h 20m 00s</div>
        </div>
      </div>
    </>
  );
}

export default App;
