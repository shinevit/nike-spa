import { useState } from 'react';
import { PrimaryButton, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../data";
import { bigShoe1 } from "../assets/images"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
      <div
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          
          <p className="text-xl font-montserrat text-accent">Our Summer collections</p>
          
          <h1 className="mt-10 heading-text text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
            <span className="xl:bg-white dark:xl:bg-primary xl:whitespace-nowrap relative z-5 pr-10">The new arrival</span>
            <br/>
            <span className="text-accent inline-block mt-3">Nike</span> shoes
          </h1>
          
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
          
          <PrimaryButton 
            label="Shop now"
            iconURL={arrowRight}
          />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold text-black dark:text-white-400">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero">
          <img
            src={bigShoeImage}
            alt="show collection"
            width={610}
            height={500}
            className="object-contain relative z-5" />

          <div className="flex sm:gap-6 gap-4 absolute 
          -bottom-[5%] sm:left-[10%] max-sm:px-6">
              {shoes && shoes.map((shoe, idx)=>(
                <div key={idx}> 
                  <ShoeCard 
                    imgURL={shoe}
                    onChangeBigShoeImage=
                    {(shoe) => setBigShoeImage(shoe)}
                    bigShoeImage={bigShoeImage}
                  />
                </div>
              ))}
          </div>
        </div>

      </div>
  );
};

export default Hero;