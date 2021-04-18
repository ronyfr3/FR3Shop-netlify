import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./header/Footer";
import Header from "./header/Header";
import Home from "./Home/Home";
import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./cart/Cart";
import Admin from "./Admin/Admin";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import PageNotFOund from "./Utils/PageNotFOund";
// import { UserRoute } from "./Private/PrivateRoute";
import { useHistory, Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, [setIsAuthenticated, isAuthenticated, history]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {isAuthenticated ? (
          <div>
            <Link to="/admin" className="adminlog">
              <span>
                <RiAdminFill className="adminlogo" />
              </span>
              Admin
            </Link>
          </div>
        ) : (
          ""
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={ProductDetails} />
          {/* path="/cart can't get id from url in cart component thats why we use  path="/cart/:id?"
           here id? question mark means optional,,,user can access cart with or without id
          */}
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={PageNotFOund} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
