const applyRippleEffect = (e) => {
  const btn = e.currentTarget;
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.className = 'ripple';
  btn.appendChild(ripple);
  
  ripple.addEventListener('animationend', () => {
      ripple.remove();
  }, { once: true });
};

const useRippleEffect = (clickCallback = () => {}) => {
  
  const apply = (event) => {
    applyRippleEffect(event);
    clickCallback();
  };

  return apply;
};

export { useRippleEffect };