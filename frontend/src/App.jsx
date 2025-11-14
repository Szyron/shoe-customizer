import './App.css'
import ShoeCard from './components/ShoeCard'
import StepsCard from './components/StepsCard'
import { BrowserRouter,Routes, Route , Navigate} from 'react-router-dom';
import OrderForm from './components/OrderForm';
import { useEffect, useState } from "react";

function App() {

  
  





  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
        <Routes>
          <Route path="/" element={<ShoeCard />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
