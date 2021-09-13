import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar.jsx';

import './App.css';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <SearchBar />
    </div>
  );
}

export default App;
