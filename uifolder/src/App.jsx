import { useState } from "react";
import Nav from "./Components/Navigation";
import Advert from "./Components/Advert";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import "./App.css";
//import { useLocation } from 'react-router-dom'
import PropTypes from "prop-types";

function App({ items }) {
  const [show, setOn] = useState(false);

  //function that displays the menu section
  function moveIn() {
    setOn(true);
  }
  //hides the  menu section
  function hide() {
    setOn(false);
  }

  return (
    <div>
      <Nav s={moveIn} items={items} />
      <Advert />
      <Menu show={show} hide={hide} />
      <Categories />
    </div>
  );
}
App.propTypes = {
  items: PropTypes.number,
};

export default App;
