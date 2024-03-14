
import './App.css'
import AddedItems from './Components/AddedItems/AddedItems'
import CartItems from './Components/CartItems/CartItems'

import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header/>
      <div className='flex gap-5'>
      <CartItems/>
      <AddedItems/>
      </div>
    </>
  )
}

export default App
