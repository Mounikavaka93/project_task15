import AboutSection from '../components/AboutSection'
import DestinationSection from '../components/DestinationSection'
import HeroSection from '../components/HeroSection'
import Newsletter from '../components/Newsletter'
import PackageSection from '../components/PackageSection'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationSection />
      <PackageSection />
      <WhyChooseUs />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </>
  )
}
