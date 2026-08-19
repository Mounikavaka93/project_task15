import AboutSection from '../components/AboutSection'
import Newsletter from '../components/Newsletter'
import PageHero from '../components/PageHero'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Wanderly"
        title="A travel studio for curious people"
        copy="We plan the logistics, partner with local experts, and leave space for the unexpected."
      />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  )
}
