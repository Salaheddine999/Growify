import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App isolate bg-purple-50">
     <Home>
      <Navbar/>
     </Home>
     <Features/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
