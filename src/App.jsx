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


const App = () => (
  <main className="relative">
    <ThemeProvider>
      <Nav />
    </ThemeProvider>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section> 
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <div className="bg-black padding-x padding-y pb-8">
      <Footer />
    </div>
  </main>
);

export default App;