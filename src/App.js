import { Route, Routes, Link } from "react-router-dom";

import Home from "./Screens/Customer/Home";

const App = () => (
  <div className="App">
    <Routes>
      <Route
        path="/"
        render={() => (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        )}
      />
    </Routes>
  </div>
);
asdf;

export default App;
