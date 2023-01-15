import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
const New = ({ inputs, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const BaseUrl = "https://super-fawn-pocketbook.cyclic.app";
  // const BaseUrl = "http://localhost:5000";
  const BaseUrl = "https://salespanel.herokuapp.com";
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async event => {
    setIsLoading(true);
    try {
      event.preventDefault();
      const form = new FormData();
      form.append('ProductName', event.target.ProductName.value);
      form.append('totalStock', event.target.totalStock.value);
      form.append('purchasePrice', event.target.purchasePrice.value);
      form.append('sellingPrice', event.target.sellingPrice.value);
      form.append('id', event.target.id.value);
      form.append('productImg', file);
      await axios
        .post(`${BaseUrl}/add-product`, form)
        .then(response => {
          console.log(response);
        }
        )
        .catch(error => console.log(error));
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
      navigate("/products");
    }


  };
  return (

    <span
    >
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
      <div className="new">


        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form onSubmit={handleSubmit} >
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    required
                    name="productImg"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} name={input.name} />
                  </div>
                ))}
                <button>Send</button>
              </form>
            </div>
          </div>


        </div>
      </div>

    </span>
  );
};

export default New;
