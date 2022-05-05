import React, { useContext, useState } from 'react'
import { UserContext } from './App';
import styles from './TodoStyles.module.css'

function Item() {
  const [item1, setItems] = useState({
    itemName: "", itemPrice: ""
  })
  const listItems = useContext(UserContext);
  const submit=(e)=>{
e.preventDefault()
if(!item1.itemName||!item1.itemPrice){
  alert("Above fields cannot be blank")
  setItems(listItems.length=1)
}
listItems(item1.itemName,item1.itemPrice)
  }
  return (
    <div className={styles.item_builder}>
      Name: <input type="text" value={item1.itemName} onChange={e => setItems({...item1, itemName: e.target.value })}/><br />
      Price(in dollars): <input type="number" value={item1.itemPrice} onChange={e => setItems({...item1, itemPrice: e.target.value })}/><br />
      <input type="button" value="Add items" onClick={submit} /><br />


    </div>
  )
}

export default Item