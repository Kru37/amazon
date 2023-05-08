
import { useNavigate } from "react-router-dom";

import "./CartEmpty.css";
const CartEmpty = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="empty_cart">
      <div className="empty_message">
        <img
          src="https://img.icons8.com/cotton/64/undefined/empty-box.png"
          alt="box"
        />
        <h3>!!The cart is Empty!!</h3>
      </div>
      <button className="backbtn" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};

export default CartEmpty;
