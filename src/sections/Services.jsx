import { services } from "../data";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <div className="max-container flex 
    justify-center flex-wrap gap-10 max-sm:gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          {...service}
        />
      ))}
    </div>
  );
};

export default Services;