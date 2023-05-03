import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import {HiOutlineLocationMarker , HiOutlineSearch ,HiOutlineShoppingCart} from 'react-icons/hi'
import { useState } from 'react'
import {useSelector} from 'react-redux'
const NavBar = () => {
  const [search , setSearch] = useState('');
  const count = useSelector((state) => state.cartItem.totalQuantity)
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className={`${styles['nav-belt']} position-static`}>

        <div className={styles['nav-left']}>
            <div className={styles['nav-logo']}>
            <Link to='/'>
                <span className={`${styles['nav-sprite']} ${styles['nav-logo-base']}`}></span>
                <span className={styles['nav-logo-locale']}>.in</span>
            </Link>
            </div>
            <div className={styles['nav-global-location-slot']}>
                <Link>
                   <div>
                      <HiOutlineLocationMarker size={20} style={{color: 'white'}}/>
                   </div>
                   <div>
                     <span>Hello</span>
                     <span>Select your address </span>
                   </div>
                </Link>
            </div>
           
        </div>
        <div className={styles['nav-search']}>
           <form >
              <div className={styles['nav-search-field ']}>
                <input type="text" placeholder='Search' value={search} onChange={handleSearchChange}/>
              </div>
              <div>
                <button>
                   <HiOutlineSearch size={20}/>
                </button>
              </div>
           </form>
        </div>
        <div className={styles['nav-cart']}>
           <Link>
             <div className={styles['nav-cart-count-container']}>
                <span>{count}</span>
                <div>
                <HiOutlineShoppingCart size={30}/>
                </div>
              
             </div>
             <span>Cart</span>
           </Link>
        </div>
    </div>
  )
}

export default NavBar