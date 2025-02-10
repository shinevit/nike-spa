import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections';
import { Nav } from './components';
import ThemeProvider from './context/ThemeContext';
import { motion } from "framer-motion";

const animateFadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } }
};

const App = () => {
  return (
    <main className="relative">
      <ThemeProvider>
        <Nav />
      </ThemeProvider>
      <section className="xl:padding-l wide:padding-r padding-b animate-fade-in-up">
        <Hero />
      </section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="padding">
          <PopularProducts />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="padding">
          <SuperQuality />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="padding-x py-10">
          <Services />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="padding">
          <SpecialOffer />
      </motion.section> 
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="bg-pale-blue padding">
          <CustomerReviews />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
      </motion.section>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        variants={animateFadeInUp}
        viewport={{ once: true }}
        className="bg-black padding-x padding-y pb-8">
          <Footer />
      </motion.footer>
    </main>
  );
};

export default App;