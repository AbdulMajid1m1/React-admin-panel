import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { DataGrid } from "@mui/x-data-grid";



// import "../../datatable/datatable.scss";
import Datatable from "../../components/datatable/datatable.scss";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="home-data-grid"> */}
          <DataGrid
            getRowHeight={({ }) => {

              return 120;
            }}
            className="datagrid home-data-grid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
