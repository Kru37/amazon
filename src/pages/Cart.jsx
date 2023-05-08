import BillDetails from '../features/BillDetails'
import Checkoutdetail from '../features/Checkoutdetail'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <section className={styles.checkout}>
    <div className={styles.container}>
      <BillDetails />
      <Checkoutdetail />
    </div>
  </section>
  )
}

export default Cart