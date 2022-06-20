import './FormInput.scss';

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor="displayName"
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >Display Name</label>
      )}
    </div>
  )
}

export default FormInput;