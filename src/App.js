
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}> 
        
        <Route path='/' element={<h1>Product Listing Component</h1>}></Route>

        <Route path='/add' element={<AddProduct />}></Route>

        <Route path='/update' element={<h1>Update Product Component</h1>}></Route>

        <Route path='/logout' element={<h1>Logout Component</h1>}></Route>

        <Route path='/profile' element={<h1>Profile Component</h1>}></Route>

        </Route>


        <Route path='/signup' element={<SignUp />}></Route>

        <Route path='/login' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  );
}

export default App;

// route pora pora component accept karta hai
// path per kia open karna hai path hona chaiye same