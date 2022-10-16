import React from "react";
import "./App.css";
import TicketWrapper from "./Components/TicketWrapper/TicketWrapper";

function App() {
  return (
    <div className="App">
      <TicketWrapper price900="900₽" purple={false}></TicketWrapper>
      <TicketWrapper
        marginTop="1rem"
        purple={true}
        price900="2900₽"
      ></TicketWrapper>
    </div>
  );
}

export default App;
