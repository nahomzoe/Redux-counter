const Button = ({ type, onClick, children }) => {
  return (
    <div className="buttons">
      <button className="button" type={type || "button"} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
