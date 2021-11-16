// import logo from './logo.svg';
import './App.css';
import Provider from './components/context/Provider';

//components
import Header from './components/header/Header';
import Product from './components/product/Product';
import Use from './components/Touse/Use';
import ProductList from './components/list/ProductList';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Product />
        <Use />
        <ProductList />
        <Footer />
      </Provider>  
    </div>
  );
}

export default App;
