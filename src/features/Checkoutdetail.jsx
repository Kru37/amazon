
import { useSelector } from "react-redux";

import "./Checkoutdetail.css";
import { useNavigate } from "react-router-dom";
const Checkoutdetail = () => {
    const navigate = useNavigate()
  const handleCheck = () => {
    window.alert('checkout done')
    navigate('/')
  };
  const totalAmount = useSelector((state) => state.cartItem.totalAmount);
  console.log('amount' , totalAmount)
  return (
    <div className="check_detail">
      <h1>Total</h1>
      <div className="addborder">
        <div className="sub_amount">
          <h3>Sub-Total</h3>
          <div className="price_style">
            <div className="amount_style">
              ₹ <span className="amount">{totalAmount}/-</span>
            </div>
          </div>
        </div>
      </div>

      <button
        className="checkout_btn"
        disabled={totalAmount === 0 ? true : false}
        onClick={handleCheck}
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkoutdetail;