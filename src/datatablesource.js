export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "productImg",
    headerName: "Product Img",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.productImg} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "ProductName",
    headerName: "Product Name",
    width: 230,
  },

  {
    field: "totalStock",
    headerName: "Total Stock",
    width: 100,
  },
  {
    field: "purchasePrice",
    headerName: "Purchase Price",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.purchasePrice}`}>
          {params.row.purchasePrice}
        </div>
      );
    },
  },
  {
    field: "sellingPrice",
    headerName: "Selling Price",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.sellingPrice}`}>
          {params.row.sellingPrice}
        </div>
      );
    },
  },

];

//temporary data
export const userRows = [
  {
    id: 1,
    // //  username: "Snow",
    img: "https://cdn.shopify.com/s/files/1/0281/2421/7432/products/peshawari-chappal-brown-round-shape-peshawari-chappal-2_504x600.jpg?v=1667897215",
    status: "1200",
    email: "Peshawari Chappal",
    age: 35,
    sellingStatus: "1500",
  },
  {
    id: 2,
    //  username: "Jamie Lannister",
    img: "https://www.muhajarcloth.com/wp-content/uploads/2021/12/MuhajarCloth.com_118-300x300.jpg",
    email: "Shawl",
    status: "1000",
    age: 42,
    sellingStatus: "1500",
  },
  {
    id: 3,
    //  username: "Stark",
    img: "https://cdn.shopify.com/s/files/1/0281/2421/7432/products/peshawari-chappal-brown-round-shape-peshawari-chappal-2_504x600.jpg?v=1667897215",
    email: "Peshawari Chappal",
    status: "600",
    age: 16,
    sellingStatus: "1000",
  },
  {
    id: 4,
    //  username: "Lannister",
    img: "https://www.muhajarcloth.com/wp-content/uploads/2021/12/MuhajarCloth.com_118-300x300.jpg",
    email: "White Shawl",
    status: "1000",
    age: 45,
    sellingStatus: "1500",
  },
 
  {
    id: 5,
    //  username: "Targaryen",
    img: "https://cdn.shopify.com/s/files/1/0281/2421/7432/products/peshawari-chappal-brown-round-shape-peshawari-chappal-2_504x600.jpg?v=1667897215",
    email: "Peshawari Chappal",
    status: "600",
    age: 16,
    sellingStatus: "1000",
  },
  {
    id: 6,
    //  username: "Melisandre",
    img: "https://cdn.shopify.com/s/files/1/0281/2421/7432/products/peshawari-chappal-brown-round-shape-peshawari-chappal-2_504x600.jpg?v=1667897215",
    email: "Peshawari Chappal",
    status: "600",
    age: 16,
    sellingStatus: "1000",
  },
  {
    id: 7,
    //  username: "Jamie Lannister",
    img: "https://www.muhajarcloth.com/wp-content/uploads/2021/12/MuhajarCloth.com_118-300x300.jpg",
    email: "Shawl",
    status: "1000",
    age: 42,
    sellingStatus: "1500",
  },
  {
    id: 8,
    //  username: "Frances",
    img: "https://cdn.shopify.com/s/files/1/0281/2421/7432/products/peshawari-chappal-brown-round-shape-peshawari-chappal-2_504x600.jpg?v=1667897215",
    email: "Peshawari Chappal",
    status: "600",
    age: 16,
    sellingStatus: "1000",
  },
 
];
