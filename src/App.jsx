import Products from "./Components/Products"
import CartProvider from "./context/CartProvider"
import Header from "./Components/Header"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <CartProvider>
          <ToastContainer 
          position="bottom-right" 
          newestOnTop={true} 
          autoClose={600}
          hideProgressBar={true}
        />
          <Header/>
          <Products/>
      </CartProvider>
  )
}

export default App
