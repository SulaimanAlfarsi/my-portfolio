import React, { useState, useEffect } from "react";
import Axios from "axios";

const AdminAccess = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    pname: "",
    pprice: "",
    pnum: "",
    pimg: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    Axios.get("http://localhost:3001/viewProducts")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        alert("Error loading Users!");
      });
  };

  const deleteProduct = () => {
    if (selectedProduct) {
      Axios.delete(
        `http://localhost:3001/deleteProduct/${selectedProduct.pname}`
      )
        .then((res) => {
          console.log(res.data);
          fetchProducts();
          setSelectedProduct(null);
          setResponseMsg("Product deleted successfully");
        })
        .catch((err) => {
          console.log(err);
          alert("Error deleting product!");
        });
    }
  };

  const updateProduct = () => {
    if (selectedProduct && Object.values(updatedProduct).every(Boolean)) {
      Axios.put(`http://localhost:3001/updateProduct/${selectedProduct._id}`, updatedProduct)
        .then((res) => {
          console.log(res.data);
          fetchProducts();
          setSelectedProduct(null);
          setUpdatedProduct({
            pname: "",
            pprice: "",
            pnum: "",
            pimg: "",
          });
          setResponseMsg("User updated successfully");
        })
        .catch((err) => {
          console.log(err);
          alert("Error updating user!");
        });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    setUpdatedProduct({
      pname: product.pname,
      pprice: product.pprice,
      pnum: product.pnum,
      pimg: product.pimg,
    });
    setResponseMsg("");
  };

  const filteredProducts = products.filter((product) =>
    product.pname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const tableStyle = {
    width: "80%",
    maxWidth: "800px",
    padding: "20px",
    background: "#f8f8f8",
    borderRadius: "8px",
    backgroundColor: "black",
  };

  const titleStyle = {
    marginBottom: "20px",
    textAlign: "center",
  };

  const buttonStyle = {
    display: "block",
    margin: "10px 0",
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  
  return (
    <>
    
    <div style={containerStyle}>
      <div style={tableStyle}>
        <h1 style={titleStyle}>Manage Users</h1>
        <label> Search: </label>
        <input
          type="text"
          placeholder="Search by User ID"
          value={searchTerm}
          onChange={handleSearch}
        />
        <table className="table table-dark">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Password</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item) => (
              <tr
                key={item._id}
                onClick={() => handleProductSelection(item)}
                className={selectedProduct && selectedProduct._id === item._id ? "selected" : ""}
              >
                <td>{item.pname}</td>
                <td>{item.pprice}</td>
                <td>{item.pnum}</td>
                <td>
                  {item.pimg} 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr/>

{selectedProduct && (
  <div>
    <label htmlFor="name" className="labelcol">ID:</label>
    <input
      type="text"
      id="name"
      value={updatedProduct.pname}
      onChange={(e) =>
        setUpdatedProduct({ ...updatedProduct, pname: e.target.value })
      }
    />
    
    <label htmlFor="price" className="labelcol">Name:</label>
    <input
      type="text"
      id="price"
      value={updatedProduct.pprice}
      onChange={(e) =>
        setUpdatedProduct({ ...updatedProduct, pprice: e.target.value })
      }
    />
  
<br/>
    <br/>
    <label htmlFor="quantity" className="labelcol">Email: </label>
    <input
      type="text"
      id="quantity"
      value={updatedProduct.pnum}
      onChange={(e) =>
        setUpdatedProduct({ ...updatedProduct, pnum: e.target.value })
      }
    />
    <label htmlFor="image" className="labelcol">Password:</label>
    <input
      type="text"
      id="image"
      value={updatedProduct.pimg}
      onChange={(e) =>
        setUpdatedProduct({ ...updatedProduct, pimg: e.target.value })
      }
    />
    <hr/>
    <button style={buttonStyle} onClick={updateProduct}>
      Update User
    </button>
    <button style={buttonStyle} onClick={deleteProduct}>
      Delete User
    </button>
    <div>{responseMsg}</div>
  </div>
)}

      </div>
    </div>
</>
  )
}

export default AdminAccess