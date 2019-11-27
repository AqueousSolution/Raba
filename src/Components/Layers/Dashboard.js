import React, { Component } from "react";
import SignedIn from "../Navigation/SignedIn";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <SignedIn /> */}
        <div className="toprow">
          <div className="streamgraph">
            <h1>Streaming Graph</h1>
          </div>
          <div className="piechart">
            <h1>Pie Chart</h1>
          </div>
        </div>
        <div className="secondrow">
          <div className="stats">
            <div className="statscontent">
              <h1 className="bigdata">53</h1>
              <p>Total Amount of Tracks</p>
            </div>
            <img className="statsicons" src="./images/saleschart.png" />
          </div>
          <div className="stats">
            <div className="statscontent">
              <h1 className="bigdata">78</h1>
              <p>Total Amount of Streams</p>
            </div>
            <img className="statsicons" src="./images/saleschart.png" />
          </div>
          <div className="stats">
            <div className="statscontent">
              <h1 className="bigdata">25</h1>
              <p>Total Amount of Downloads</p>
            </div>
            <img className="statsicons" src="./images/saleschart.png" />
          </div>
          <div className="stats">
            <div className="statscontent">
              <h1 className="bigdata">$80</h1>
              <p>Total Amount of Sales</p>
            </div>
            <img className="statsicons" src="./images/saleschart.png" />
          </div>
        </div>
        <div className="bottomrow">
          <div className="streamgraph">
            <h1>Downloads Graph</h1>
          </div>
          <div className="topdownloads">
            <h1>Top Downloads</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
