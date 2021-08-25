import "./App.css";
import Header from "./pages/Header";
import { BrowserRouter, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protect from "./pages/Protect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Header />
        <h3>Welcome to next generation E-Commerce application</h3>
      </Route>
        <Route path="/add">
          <Protect Cmp={AddProduct}/>
          {/* <AddProduct/> */}
        </Route>
        <Route path="/update">
        <Protect Cmp={UpdateProduct}/>
          {/* <UpdateProduct/> */}
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
