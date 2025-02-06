const BaseButton = ({
  label,
  children,
  className,
  iconURL,
  onClick,
  fullWidth
}) => (
  <button className={`${className} ${fullWidth && 'w-full'}`} onClick={onClick}>
    {children || label}

    {iconURL && 
        <img src={iconURL} alt="icon" className="icon-small" />
    }
  </button>
);

const PrimaryButton = ({ label, iconURL, fullWidth, onClick}) => (
  <BaseButton
      label={label}
      iconURL={iconURL}
      className="button-primary"
      fullWidth={fullWidth}
      onClick={onClick} />
);

const OutlineButton = ({ label, fullWidth, onClick}) => (
  <BaseButton
      label={label}
      className="button-outline"
      fullWidth={fullWidth}
      onClick={onClick} />
);

export {
  PrimaryButton,
  OutlineButton
};