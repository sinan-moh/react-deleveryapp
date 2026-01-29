import { LOGO_URL } from "../utils/componens";

let Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="logo-img"
          alt="logo-img"
          src ={ LOGO_URL }
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header