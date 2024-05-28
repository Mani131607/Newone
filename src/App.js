import './App.css';
import Body from './Components/Body.js';
import Header from './Components/Header.js';
import Image from './Components/Image.js';
import Colapseimages from './Components/colapseimages.js';
import Information from './Components/Information.js';
import Bodymani from './Components/Body1.js';
import MarqueeImages from './Components/Movingimages.js';
import Card from './Components/Card.js';
import Informationbody from './Components/Informationbodey.js';
import Reviews from './Components/Reviews.js';
import Footer from './Components/Footer.js';
import Footer1 from './Components/Footer1.js';
import Favicon from './Components/Favicon.js';

function App() {
  return (
    <div>
      <header>
     <Header/>
     <Image/>
     <Information/>
     <Body/>
     <Colapseimages/>
     <Bodymani/>
     <Informationbody/>
     <Card/>
     <MarqueeImages/>
     <Reviews/>
     <Footer/>
    <Footer1/>
    <Favicon/>
    
      </header>
    </div>
  );
}

export default App;
