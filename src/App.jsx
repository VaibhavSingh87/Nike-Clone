import CustomerReviews from "./sections/CustomerReviews";
import Hero from "./sections/Hero";
import SpecialOffer from "./sections/SpecialOffer";
import Products from "./sections/Products";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <Products/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}
export default App;