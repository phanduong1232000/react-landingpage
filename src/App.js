import Header from './components/Header'
import About from './components/About'
import Linhvuc from './components/Linhvuc';
import Timeline from './components/Timeline';
import Vision from './components/Vision';
import Mision from './components/Mision';
import Value from './components/Value';
import Thankyou from './components/Thankyou';
import Footer from './components/Footer';
import JsonData from '../src/data.json';
import { useEffect, useState } from 'react';




const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  
  return (
     <div className='abc'>
          <Header data={landingPageData.Header}/>
          <About />
          <Linhvuc />
          <Timeline />
          <Vision />
          <Mision />
          <Value />
          <Thankyou />
          <Footer />
     </div>
  );
}

export default App;
