import Button from '../components/CTAButton';

const Subscribe = () => {
  return (
    <section 
      id="contact-us"
      className="max-container flex justify-between
      items-center max-lg:flex-col gap-10">
        <div className="heading-text ">
          <h3 className="leading-[68px] lg:max-w-md">Sign up for {' '}
            <span className="text-coral-red">updates</span>{' '}& newsletter
          </h3>
        </div>
        <div className="flex lg:max-w-[40%] w-full items-center
        max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray
        rounded-full min-w-[380px]">
          <input 
            type="text"
            placeholder="subscribe@nike.com"
            className="input"
          />
          <div className="flex max-sm:justify-end items-center
          max-sm:w-full max-md:hidden">
            <Button label="Sign Up" fullWidth />
          </div>
          <div className="flex max-sm:justify-end items-center
          w-full hidden max-md:block">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
    </section>
  );
};

export default Subscribe;