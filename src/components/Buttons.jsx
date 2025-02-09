import { useRippleEffect } from '../hooks/useRippleEffect';

const BaseButton = ({
  label,
  children,
  className,
  iconURL,
  onClick,
  fullWidth
}) => {
  const onClickWithRipple = useRippleEffect(onClick);
  
  return (
    <button className={`${className} ${fullWidth && 'w-full'}`} onClick={onClickWithRipple}>
      {children || label}

      {iconURL && 
          <img src={iconURL} alt="icon" className="ml-2 icon-small" />
      }
    </button>
  );
}

const PrimaryButton = ({ label, iconURL, fullWidth, onClick}) => (
  <BaseButton
      label={label}
      iconURL={iconURL}
      className="button-primary"
      fullWidth={fullWidth}
      onClick={onClick} />
);

const OutlineButton = ({ label, fullWidth, onClick, className}) => (
  <BaseButton
      label={label}
      className={`button-outline ${className}`}
      fullWidth={fullWidth}
      onClick={onClick} />
);

export {
  PrimaryButton,
  OutlineButton
};