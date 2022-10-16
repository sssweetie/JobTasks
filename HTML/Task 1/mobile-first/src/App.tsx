import React from "react";
import "./App.css";
import TicketWrapper from "./Components/TicketWrapper/TicketWrapper";
import background1 from "./Images/TicketWrapper/background1.png";
import background2 from "./Images/TicketWrapper/background2.png";
import background3 from "./Images/TicketWrapper/background3.png";
function App() {
  return (
    <div className="App">
      <TicketWrapper
        price900="900₽"
        purple={false}
        img={background1}
        yellow={true}
      ></TicketWrapper>
      <TicketWrapper
        marginTop="2%"
        purple={true}
        price900="2900₽"
        img={background2}
      ></TicketWrapper>
      <TicketWrapper
        marginTop="2%"
        price900="900₽"
        img={background3}
      ></TicketWrapper>
    </div>
  );
}

export default App;
