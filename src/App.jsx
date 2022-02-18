import './App.css';
import ShopList from './views/ShopList';
import { ShopProvider } from './context/ShopProvider';

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <ShopList />
      </ShopProvider>
    </div>
  );
}

export default App;
