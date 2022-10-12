import './App.css';
import Header from './component/includes/Header'
import Footer from './component/includes/Footer';
import Home from './component/pages/Home';
import About from './component/pages/About';
import ExpensesItem from './component/pages/Expenses/ExpensesItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/expenses' element={<ExpensesItem />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;