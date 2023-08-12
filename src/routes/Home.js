import React  from 'react'
import Navbar from '../components/Navbar';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Work from "../components/Work";
import Lottie from '../components/Lottie';




const Home = () => {

  
  return(
  <div>
  <Navbar />
  <Image />
  <Lottie/>
  <Work/>
  <Footer />
  </div>
  );
  
};

export default Home