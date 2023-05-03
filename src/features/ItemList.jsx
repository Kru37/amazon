/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import StarRating from "../components/StarRating"

const ItemList = (props) => {
    // eslint-disable-next-line no-unused-vars
    const {asin , price , thumbnail , title , review , rating} =  props
  return (
    <div className="card">
        <Link to={asin}>
        <img src={thumbnail} alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div>
                {/* <StarRating rating={rating} /> */}
                {review}
            </div>
            <p className="card-text">₹{price.current_price}</p>
        </div>
        </Link>
    </div>
  )
}

export default ItemList