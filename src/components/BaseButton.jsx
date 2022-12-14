const BaseButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default BaseButton;
