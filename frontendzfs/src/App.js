import logo from './logo.svg';
import './App.css';
import Main from './components/Main.jsx'
function App() {
  return (
    <div className="App">
    <h1>Inventory</h1>
    <div>
      <h3>Select SUPPLIER</h3>
      <select onChange={}>
        <option value="0" selected>Select</option>
        <option value="">Dummy </option>
      </select>
    </div>
    <div>
      <h3>Select Item</h3>
      <select onChange={}>
        <option value="0" selected>Select</option>
        <option value="">Dummy </option>
      </select>
    </div>
    <div>
      <h3>Select Quantity</h3>
      <select onChange={}>
        <option value="0" selected>Select</option>
        <option value="">Dummy </option>
      </select>
    </div>
    </div>
  );
}

export default App;
