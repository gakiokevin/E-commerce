import "./Categories.css";
import jw from "../img/jewelery.jpg";
import e from "../img/electronics.jpg";
import men from "../img/men.jpg";
import women from "../img/women.jpg";
import { Link } from "react-router-dom";
const Categories = () => {
  // const category= ['electronics','men','women','jewellery']
  return (
    <div>
      <div className="categories">
        <h3>Top Categories</h3>
        <div className="grid">
          <Link to="jewelery">
          <div className="j-img">
            <img src={jw} alt="jewelery" />
            <p>Jewellery</p>
          </div>
          </Link>
          <Link to="electronics">
          <div className="e-img">
            <img src={e} alt="electronics" />
            <p>Electronics</p>
          </div>
          </Link>
          <Link to="men's-clothing">
          <div className="m-img">
            <img src={men} alt="men-fashion" />
            <p>Men fashion</p>
          </div>
          </Link>
          <Link to="women's-clothing">
          <div className="w-img">
            <img src={women} alt="women-fashion" />
            <p>Women fashion</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Categories;
