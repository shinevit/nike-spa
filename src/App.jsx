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
import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav /> {/* Done */}
    <section className="padding-b">
      <Hero /> {/* Done */}
    </section>
    <section className="padding">
      <PopularProducts /> {/* Done */}
    </section>
    <section className="padding">
      <SuperQuality /> {/* Done */}
    </section>
    <section className="padding-x py-10">
      <Services /> {/* Done */}
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
    <section className="bg-black padding-x padding-y pb-8">
      <Footer />
    </section>
  </main>
);

export default App;