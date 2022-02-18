import './App.css';
import ShopList from './views/ShopList';
import { ShopProvider } from './context/ShopProvider';

function App() {
  return (
    <>
      <ShopProvider>
        <ShopList />
      </ShopProvider>
    </>
  );
}

export default App;
