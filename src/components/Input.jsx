
const Input = (props) => {

    const { id, label, onChange, error, type } = props

    const className = error ? 'form-control is-invalid': 'form-control'

    return (
        <div className='form-group'>
            <label htmlFor={id}>{ label }</label>
            <input type={type} className={className} id={id} onChange={onChange} autoComplete='off' />
            <div className="invalid-feedback">{ error }</div>
        </div>
    );
};

export default Input;