
import { useEffect } from 'react'
import { getItems } from '../store/itemReducer'
import styles from './MainContent.module.css'
import {useDispatch , useSelector} from 'react-redux'
import ItemList from '../features/ItemList'
const MainContent = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) =>  state.itemList.items)
    useEffect(() => {
       dispatch(getItems())
    },[dispatch])
  return (
    <div>
        <div className={styles.container}>
           {items && items.map((data) => {
            return (
                <ItemList
                 key = {data.asin}
                 asin = {data.asin}
                 price = {data.price}
                 thumbnail = {data.thumbnail}
                 title = {data.title}
                 review = {data.review }
                 rating = {data.rating}
                 />
            ) 
           })}
        </div>
    t</div>
  )
}

export default MainContent