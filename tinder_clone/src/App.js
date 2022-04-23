import './App.css';
import Header from './components/Header'
import TinderCards from './components/TinderCards'
import SwipeButton from './components/SwipeButton'
function App() {
  return (
    <div className="app">
      <Header/>
    <TinderCards/>
    <SwipeButton/>
    </div>
  );
}

export default App;
