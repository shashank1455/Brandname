import logo from './logo.svg';
import './App.css';
import './index.css'
import Navigation from './Components/navigation';
import Hero from './Components/Hero';
function App() {
  return (
    <div className="container mx-auto px-10 py-8" >
     <Navigation />
     <Hero/>
    </div>
  );
}

export default App;
