import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import HomePage from './components/HomePage/HomePage';
import ComponentsPage from './components/ComponetsPage/ComponentsPage';
import Navbar from './navbar/Navbar/Navbar';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/components' element={<ComponentsPage />}/>
    </Routes>
  </BrowserRouter>
)