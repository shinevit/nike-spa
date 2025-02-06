import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/CTAButton";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-start 
     max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col md:min-w-[450px] xl:max-w-[573px] xl:pt-35 text-justify">
        <h2 className="heading-text">
          Special{' '}<span className="text-coral-red">offer</span>
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-row gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            extraClasses={{
              backgroundColor: "bg-white",
              borderColor: "border-slate-gray",
              textColor: "text-slate-gray"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;