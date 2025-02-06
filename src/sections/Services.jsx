import { services } from "../data";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container flex 
    justify-center flex-wrap sm:gap-10">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          {...service}
        />
      ))}
    </section>
  );
};

export default Services;