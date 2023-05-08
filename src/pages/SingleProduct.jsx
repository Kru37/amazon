
import { json, useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './SingleProduct.module.css'
import { cartActions } from '../store/cartReducer'
const secretKey = import.meta.env.VITE_API_KEY;
const SingleProduct = () => {
  const singledata = useLoaderData()
  console.log(singledata)
  const disptach = useDispatch()
  const handleCartAdd = () => {

    const item = {
      id: singledata.asin,
      img:singledata.main_image,
      price: +singledata.price.current_price,
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

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async({params}) => {

  const response = await fetch(`https://amazon23.p.rapidapi.com/product-details?asin=${params.id}&country=IN` ,    {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":secretKey,
      "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
    },
  })
  if(!response.ok){
     throw json({message:'something went wrong'},{status:500})
  }else{
    const resData = await response.json()
    console.log(resData , 'res')
    return resData.result[0]
  }
}