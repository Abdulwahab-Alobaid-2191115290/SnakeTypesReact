import "../assets/css/App.css";
import Home from "./Home";
import Header from "./Header";
import Stage from "./Stage";
import Login from "./Login";
import Side from "./Side";
import Profile from "./Profile";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";
import LeaderBoard from "./LeaderBoard";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <Header />
          <Side />
          {/* <MiniProfile />
        <MiniChart /> */}
          <Routes>
            {/* Home Page */}
            <Route exact path="/" Component={Home}></Route>
            {/* Stage */}
            <Route exact path="/stage" Component={Stage} />
            {/* Login */}
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />
            {/* Profile */}
            <Route exact path="/profile" Component={Profile} />
            <Route exact path="/leaderboard" Component={LeaderBoard} />
          </Routes>
        </div>
      </Router>{" "}
    </UserContext.Provider>
  );
}

export default App;
