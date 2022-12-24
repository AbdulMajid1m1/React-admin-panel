import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState } from "react";

const Single = () => {
  const handleClick = () => {
    setSoldItems(soldItems - 1);
  }
  const [soldItems, setSoldItems] = useState(10);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://www.muhajarcloth.com/wp-content/uploads/2021/12/MuhajarCloth.com_118-300x300.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"> Shawl</h1>
                <div className="detailItem">
                  <span className="itemKey">Totla Stock</span>
                  <span className="itemValue">20</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Purchase Price</span>
                  <span className="itemValue">1000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Selling Price</span>
                  <span className="itemValue">
                    1500
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">December Stats</h1>
          <List soldItems={soldItems} />

          <div className="return-btn-div" onClick={handleClick}>
            <button className="return-btn" >Return Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
