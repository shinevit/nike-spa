
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px]
    sm:min-w-[350px] w-full rounded-[20px] shadow-3xl
    px-10 py-16 dark:shadow-2xl dark:bg-pale-blue">
      <div className="w-11 h-11 flex justify-center items-center 
      bg-accent rounded-full">
        <img
          src={imgURL}
          alt={label}
          width={24} height={24}
        />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal
      font-bold text-black dark:text-white-400">{label}</h3>
      <p className="mt-3 break-words font-montserrat
      text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServiceCard;