import './App.css';
import DrinkList from './components/DrinkList';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <DrinkList />
      <Footer />
    </div>
  );
}

export default App;
