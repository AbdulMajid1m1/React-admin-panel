import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BeatLoader } from 'react-spinners';
const Single = () => {
  const [soldItems, setSoldItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleSellClick = async (id) => {
    setIsLoading(true);
    const updatedProduct = await axios.put(`${BaseUrl}/update-product/${id}`, {
    }).then(response => {
      if (response.status === 200) {
        setSoldItems(soldItems + 1);
        setIsLoading(false);
      }
    }).catch(error => {
      if (error.response.status === 400) {
        setIsLoading(false);
        alert("No items in stock" + "\n" + error);

      }
      else {
        console.log("An error occurred", error);
        setIsLoading(false);
        alert("An error occurred" + error);
      }

    });



  }
  const handleReturnClick = async (id) => {
    setIsLoading(true);
    const updatedProduct = await axios.put(`${BaseUrl}/return-product-update/${id}`, {
    }).then(response => {
      // console.log(response.status);
      if (response === 400) {
        setIsLoading(false);
        alert("No items sold");
      }
      if (response.status === 200) {
        setSoldItems(soldItems - 1);
        setIsLoading(false);
      }
    }).catch(error => {
      if (error.response.status === 400) {
        setIsLoading(false);
        console.log("Bad Request");
        alert("No items sold" + "\n" + error);
      } else {
        setIsLoading(false);
        console.log("An error occurred", error);
        alert("An error occurred" + error);
      }

    });

  }
  const BaseUrl = "http://localhost:5000";
  // const BaseUrl = "https://salespanel.herokuapp.com";

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`${BaseUrl}/get-product/${id}`);
      setProductData(response.data);
      setSoldItems(response.data.soldItems);
    };
    fetchProduct();

  }, [soldItems]);
  return (
    <div className="single">
      {isLoading &&
        <div className='loading-spinner-background'>
          <BeatLoader
            size={15}
            color={"#6439ff"}
            // height={4}
            loading={isLoading}
          />
        </div>
      }
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={productData.productImg}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{productData.ProductName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Totla Stock</span>
                  <span className="itemValue">{productData.totalStock}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Purchase Price</span>
                  <span className="itemValue">{productData.purchasePrice}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Selling Price</span>
                  <span className="itemValue">
                    {productData.sellingPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Product Stats" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">December Stats</h1>
          <List soldItems={productData.soldItems} totalStock={productData.totalStock} productId={productData.id} ProductName={productData.ProductName}
            purchasePrice={productData.purchasePrice} sellingPrice={productData.sellingPrice} productImg={productData.productImg}
          />

          <div className="return-btn-div">
            <button className="return-btn" onClick={() => handleReturnClick(productData._id)}>Return Item</button>
            <button className="sell-btn" onClick={() => handleSellClick(productData._id)}>Sell Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
