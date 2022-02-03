// import logo from './logo.svg';
import './App.css';
import ExploreSec from './components/explore-section/explore';
import FooterSec from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import SearchBarSec from './components/search-banner/seacrhBanner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBarSec />
      <ExploreSec />
      <FooterSec />
    </div>
  );
}

export default App;
