import Spinner from "./Spinner";

const Button = (props) => {
  const { text, onClick, className, apiProgress, disabled, type } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className ? className : "btn btn-outline-primary"}
    >
      <b>
        {apiProgress && <Spinner />}
        {text}
      </b>
    </button>
  );
};

export default Button;
