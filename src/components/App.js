import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){

  const appStyle = {
    fontFamily: 'sans-serif',
  }

  return (
    <React.Fragment>
      <div style = {appStyle}>
      <Header />
      <TicketControl/>
      </div>
    </React.Fragment>
  );
}

export default App;
