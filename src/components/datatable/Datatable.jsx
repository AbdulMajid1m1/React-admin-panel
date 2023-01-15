import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
  const BaseUrl = "http://localhost:5000";
  // const BaseUrl = "https://super-fawn-pocketbook.cyclic.app";
  // const BaseUrl = "https://salespanel.herokuapp.com";
  const [data, setData] = useState([]);


  // use native fetch api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BaseUrl}/get-all-products`);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id, mongo_id) => {
    setData(data.filter((item) => item.id !== id));
    //   call delete api
    const response = await axios.delete(`${BaseUrl}/delete-product/${mongo_id}`);
    console.log(response);

  };



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/products/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id, params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (

    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        getRowHeight={({ }) => {

          return 120;
        }}
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
