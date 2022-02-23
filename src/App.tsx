import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { ItemListContainer } from './components/Item/ItemListContainer';
import { ItemDetailContainer } from './components/Item/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
