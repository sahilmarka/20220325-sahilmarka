import Navbar from 'components/navbar/Navbar';
import SearchCity from 'components/SearchCity/searchCity';
import './App.scss'
import { arrow } from 'assets/images';
import Explore from 'components/Explore/Explore';
import AboutUs from 'components/AboutUs/AboutUs';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <section className='body-container'>
          <div className='mainHeading'>
            <p className='mainText'>Rethink your living & renting</p>
            <p className='subText'>Make your stay painless with us</p>
          </div>
          <SearchCity />
          <img className='details-arrow' alt='down arrow' src={arrow}/>
        </section>
      </header>
      <Explore/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
