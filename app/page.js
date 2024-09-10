
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhoAreWe from '@/src/components/WhoAreWe/WhoAreWe';
export default function Home() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <BrandingVideo/>
      <WhoAreWe/>
    </div>
  );
}
