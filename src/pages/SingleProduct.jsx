
import { json, useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './SingleProduct.module.css'
import { cartActions } from '../store/cartReducer'
const SingleProduct = () => {
  const singledata = useLoaderData()
  const disptach = useDispatch()
  const handleCartAdd = () => {
    const item = {
      id: singledata.asin,
      img:singledata.main_image,
      price: +singledata.current_price,
      title: singledata.title
    }
    disptach(cartActions.additem(item))
  }
  return (
    <div className={styles.productCard}>
       <div className="row">
        <div className="col"> 
           <img src={singledata.main_image} alt={singledata.title} />
        </div>
        <div className="col" style={{display: 'flex' , flexDirection: 'column' , justifyContent: 'space-between'}}>
            <h5>{singledata.title}</h5>
            <p>{singledata.feature_bullets[0]}</p>
            <button onClick={handleCartAdd}>Add to Cart</button>
        </div>
       </div>
    </div>
  )
}

export default SingleProduct

export const loader = async({params}) => {
  const response = await fetch(`https://amazon23.p.rapidapi.com/product-details?asin=${params.id}&country=US`)
  if(!response.ok){
     throw json({message:'something went wrong'},{status:500})
  }else{
    const resData = await response.json()
    return resData.result[0]
  }
}