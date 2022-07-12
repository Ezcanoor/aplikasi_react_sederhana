import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    {
      productName: "",
      productPrice: 0,
      qty: 1,
      total: 0,
      id: 1,
    },
  ]);

  let [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    console.log(productList)
    console.log(totalPrice)
    
  }, [productList, totalPrice]);

  const addNewProduct = (e) => {
    const newProduct = {
      productName: "",
      productPrice: 0,
      qty: 1,
      total: 0,
      id: productList[productList.length - 1]?.id + 1,
    };
    newProduct.total = newProduct.productPrice * newProduct.qty
    setProductList([...productList, newProduct]);
  };

  const deleteRow = (id) => {
    const filteredRow = productList.filter(el => el.id != id);
    setProductList(filteredRow)
  }

  const changeState = (e, id, key) => {
    const products = productList.map(el => {
      if (el.id == id){
        el[key] = e.target.value
        el.total = el.productPrice * el.qty
        setTotalPrice(totalPrice + el.qty)
      }
      return el
    })
    setProductList(products)
  }

  return (
    <div className="App">
      <div>
        <form>
          <div class="container">
            <button
              type="button"
              class="btn btn-primary"
              onClick={addNewProduct}
            >
              New
            </button>
            {productList.map((el, index) => (
              <div class="row">
                <div class="col">
                  <div class="row">
                    <label>Product Name</label> <input type="text" value={el.productName} onChange={(e) => changeState(e, el.id,'productName')}></input>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <label>Product Price</label> <input type="text" value={el.productPrice} onChange={(e) => changeState(e, el.id,'productPrice')}></input>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <label>qty</label> <input type="text" value={el.qty} onChange={(e) => changeState(e, el.id,'qty')}></input>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <label>total</label> <input type="text" value={el.total} ></input>
                  </div>
                </div>
                <button type="button" class="btn btn-danger" onClick={(e) => deleteRow(el.id) }>Del</button>

              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
