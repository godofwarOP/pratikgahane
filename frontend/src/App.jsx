import { useState } from "react";
import "./app.css";
import Search from "./components/search/Search";
import Ads from "./components/ads/Ads";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(e) {
    const value = e.target.value.replace(new RegExp(/[\\/.]/g), "");
    setSearchTerm(value);
  }

  return (
    <div className="app">
      <Search handleInputChange={handleInputChange} />
      <Ads value={searchTerm} />
    </div>
  );
}

export default App;
