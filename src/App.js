import React, { useState } from "react";
import "./App.css"
import Header from './header';
import Item from './item';
import Cart from './cart'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const DeleteContext = React.createContext()
function App() {
  const [items, setItems] = useState([{
    sno: null,
    itemName: "",
    price: ""
  }])


  const addItem = (itemName, price) => {

    console.log("Adding the cart", itemName, price)
    const item = {
      sno: Math.ceil(Math.random() * 10),
      itemName: itemName,
      price: "$" + price
    }
    console.log(item)
    setItems([...items, item])
  }
  const deleteItem = (item) => {
    console.log("Deleting", item)
    console.log("Index",items.indexOf(item))
    setItems(items.filter(e=>{
    return e!==item
    }))
  }
  return (
    <>
      <Header />
      <div>
        <UserContext.Provider value={addItem}>
          <Item />
        </UserContext.Provider>
      </div>
      <div>
        <ChannelContext.Provider value={items}>
          <DeleteContext.Provider value={deleteItem}>
            <Cart />
          </DeleteContext.Provider>
        </ChannelContext.Provider>
      </div>
    </>
  );
}

export default App;
