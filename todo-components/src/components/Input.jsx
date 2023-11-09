import PropTypes from "prop-types";

const Input = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div className="flex-row">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    };

export default Input;
