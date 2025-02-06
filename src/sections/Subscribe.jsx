import Button from '../components/CTAButton';

const Subscribe = () => {
  return (
    <section 
      id="contact-us"
      className="max-container flex justify-between
      items-center max-lg:flex-col gap-10">
        <div className="heading-text">
          <h3 className="leading-[68px] lg:max-w-md">Sign up for {' '}
            <span className="text-coral-red">updates</span>{' '}& newsletter
          </h3>
        </div>
        <div className="flex lg:max-w-[40%] w-full items-center
        max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray
        rounded-full max-sm:px-0">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="subscribe@nike.com"
            className="input max-sm:py-3 w-full"
          />
          <div className="flex max-sm:justify-end max-sm:w-full items-center">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
    </section>
  );
};

export default Subscribe;