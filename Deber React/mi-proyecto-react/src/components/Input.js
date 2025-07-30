const Input = ({ type, placeholder, value, onChange, required, minLength }) => (
  <input
    type={type}
    className="form-control mb-2"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    minLength={minLength}
  />
);
export default Input;
