import React from 'react';
import '../Style.css';
import PropTypes from 'prop-types';

const TextField = ({
  type,
  value,
  label = '',
  name = '',
  placeholder = '',
  setvalue,
  register,
  defaultValue = '',
  errors = {},
  className = 'form-control',
}) => {
  const attributes = { type: type };
  if (register) {
    attributes.ref = register;
  }

  if (className) {
    attributes.className = className;
  }

  if (value) {
    attributes.value = value;
  } else {
    attributes.defaultValue = defaultValue;
  }

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e.target.value);
    }
    return null;
  };
  return (
    <div className="form-group">
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        {...attributes}
      />
      {errors[name] && (
        <h6 className="text-danger">{errors?.[name]?.message}</h6>
      )}
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  setvalue: PropTypes.func,
  register: PropTypes.func,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  errors: PropTypes.object,
};

export default TextField;
