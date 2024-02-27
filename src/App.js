import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import DashboardPage from './pages/Dashboard'
import CoinPage from './pages/Coin'
import ComparePage from '@mui/utils/composeClasses'
import WatchlistPage from './pages/Watchlist'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className='app'>
    <div className="cursor" id="cursor" />
    <div className="cursor-pointer" id="cursor-pointer" />
     <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Coin/:id" element={<CoinPage />} />
           <Route path="/compare" element={<ComparePage />} />
          <Route path="/Watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App