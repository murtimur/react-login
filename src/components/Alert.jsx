const Alert = (props) => {
  const { text, className } = props;
  const classNameSelected = className ? className : 'alert alert-primary';
  return (
    <div className={classNameSelected} role="alert">
      {text}
    </div>
  );
};

export default Alert;
