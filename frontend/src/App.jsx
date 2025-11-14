import './App.css'
import ShoeCard from './components/ShoeCard';
import OrderForm from './components/OrderForm';
import { ToastContainer } from 'react-toastify';
import { OrderProvider } from './components/OrderContext';

function App() {
  return (
    <OrderProvider>
    <div className="min-h-screen w-full p-4 md:p-6 lg:p-8 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        <div className="flex justify-center">
          <ShoeCard/>
        </div>
        <div className="flex justify-center items-center">
          <OrderForm/>
          
        </div>
        <ToastContainer />
      </div>
    </div>
    </OrderProvider>
  )
}

export default App
