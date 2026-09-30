import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "30px", fontWeight: "bold" }}>
        ⚽ FIFA Player Cards
      </h1>
      <p style={{ textAlign: "center", color: "#6b7280" }}>
        Découvrez quelques stars du football
      </p>
      <PlayersList />
    </div>
  );
}

export default App;
