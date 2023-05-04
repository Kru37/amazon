/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import StarRating from "../components/StarRating"
import styles from './ItemList.module.css'
const ItemList = (props) => {
    // eslint-disable-next-line no-unused-vars
    const {asin , price , thumbnail , title , reviews} =  props
  return (
    <div className="card">
        <Link to={asin} className={styles.cardLinkContainer}>
        <img src={thumbnail} alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className={styles.rating}>
                <StarRating rating={reviews.rating} />  
               
                {reviews.total_reviews}
            </div>
            <p className="card-text" style={{color: 'black' , fontWeight: 700 , textDecoration: 'none' , fontSize: '1.3rem'}}>₹{price.current_price}</p>
        </div>
        </Link>
    </div>
  )
}

export default ItemList