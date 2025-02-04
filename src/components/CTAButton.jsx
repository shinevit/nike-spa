const CTAButton = ({ label, iconURL, extraClasses, fullWidth}) => {
  const classesStr = `${Object.values({...extraClasses})}`.replaceAll(',', ' ');

  return (
    <button className={`flex justify-center items-center
      gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      rounded-full ${fullWidth && 'w-full'}
      ${extraClasses 
        ? classesStr
        : 'bg-coral-red border-coral-red text-white'}
    `}>
      {label}

      {iconURL && 
        <img 
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      }
    </button>
  );
};

export default CTAButton;