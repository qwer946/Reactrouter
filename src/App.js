import React from "react";
import stockData from "./pages/stock-data";
import Header from "./pages/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Stock from "./pages/Stock";

function App(props) {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/stocks/:symbol"
            render={(props) => <Stock stockData={stockData} {...props} />}
          />
          <Route
            path="/stocks"
            render={(props) => <Dashboard {...props} stockData={stockData} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
