import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";

const App = () => {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
    </div>
  );
}

export default App;
