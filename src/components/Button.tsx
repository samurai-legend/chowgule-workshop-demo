const Button: React.FC<{ children: React.ReactNode } & any> = ({
  children,
  ...props
}) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
