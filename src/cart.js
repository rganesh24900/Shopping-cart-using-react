import React, { useContext} from 'react'
import { ChannelContext, DeleteContext } from './App'
import styles from './TodoStyles.module.css'

function Cart() {
    const list =useContext(ChannelContext)
    const deleteItem = useContext(DeleteContext)
  
        return(
    <div>
     
       <ul className={styles.cart_item}>
       <h1>Cart items</h1>
         {list.map(
           item=>{
           if(list.length===1){
             return(<p key={item.sno}>Cart is empty</p>)
           }
           else{
             return(
           <div className={styles.itemslot} key={item.sno}>
             <h3 className={styles.itemlist}>{item.itemName}</h3>
             <p className={styles.pricelist}>{item.price}</p>
             {item.sno?<button id={styles.btn} onClick={()=>{deleteItem(item)}} >Delete</button>:null} 
           </div>)
           }
})}
       </ul>
        </div>)
  
}

export default Cart