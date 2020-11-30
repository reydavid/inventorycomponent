import './App.css';
import Inventory from './Inventory/Inventory'
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <Header item="Item:" inventory="Inventory:" cost="Cost:" />
      <Inventory item="Rubber dog poo" count=".5lb" upc="12345" cost="1.99" />
      <Inventory item="Brake juice" count="50grams" upc="54321" cost="2.99" />
      <Inventory item="Anti-Bieber spray" count="12oz" upc="98765" cost="2.49" />
      <Inventory item="Baby cat food" count="1lb" upc="8675309"cost="4.99" />
      <Inventory item="Tesla" count="4800lb" upc="543643" cost="69950.00" />
    </div>
  );
}

export default App;
