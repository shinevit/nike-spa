import { shoe8 } from "../assets/images";
import Button from "../components/CTAButton";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-start
      max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="heading-text lg:max-w-lg">
          We provide you{' '}
          <span className="text-coral-red">super quality</span>{' '}
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-justify">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text text-justify">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 flex-wrap max-sm:mx-[-20px]
      lg:mr-[32px] max-lg:justify-center wide:justify-end items-center">
        <img 
          src={shoe8}
          alt="shoe super quality"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;