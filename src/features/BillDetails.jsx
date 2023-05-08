import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
import { cartActions } from "../store/cartReducer";
import { ImCross } from "react-icons/im"; 
import "./BillDetails.css";
const BillDetails = () => {
  const {cartItems , totalAmount } = useSelector((state) =>  state.cartItem)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  const handleAdd = (item) => {
    console.log(item);
    let addIteminfo = {
      id: item.id,
      img: item.img,
      name: item.name,
      price: item.price,
      amount: item.amount ? item.amount : 1,
    };
    dispatch(cartActions.additem(addIteminfo));
  };
  const handleDecrease = (id) => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <div className="bill_details">
    <h2>My Bag</h2>
    {cartItems.length === 0 && <CartEmpty />}
    {cartItems.map((item) => {
      return (
        <div className="item_border_check" key={item.id}>
          <div className="item_info">
            <img src={item.img} alt={item.title} />

            <div className="singleitem_info">
              <h2>{item.title}</h2>
              <div className="price_style">
                <div className="amount_style">
                  ₹ <span className="amount">{item.price}/-</span>
                </div>
              </div>
              <div className="quantity_control">
                <div>
                  <button
                    className="increase"
                    onClick={handleDecrease.bind(null, item.id)}
                  >
                    -
                  </button>
                </div>
                <div className="quantity_display">
                  <h2>{item.amount}</h2>
                </div>
                <div>
                  <button onClick={handleAdd.bind(null, item)}>+</button>
                </div>
              </div>
            </div>
            <div className="cross" onClick={handleDelete.bind(null, item.id)}>
              <ImCross />
            </div>
          </div>
        </div>
      );
    })}
    {cartItems.length > 0 && (
      <div className="sub_total">
        <div>
          <h3>Sub-Total</h3>
        </div>

        <div className="price_style">
          <div className="amount_style">
            ₹ <span className="amount">{totalAmount}/-</span>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default BillDetails