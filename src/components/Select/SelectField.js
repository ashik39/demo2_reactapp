import React from 'react';
import '../Style.css';
import PropTypes from 'prop-types';

const SelectField = ({
  name = '',
  data = [],
  setvalue,
  placeholder = '',
  label = '',
  value,
  register,
  defaultValue = '',
  errors = {},
  className = 'form-select',
}) => {
  const attributes = {};
  if (register) {
    attributes.ref = register;
  }

  if (className) {
    attributes.className = className;
  }

  if (value) {
    attributes.value = value;
  }
  if (defaultValue) {
    attributes.defaultValue = defaultValue;
  }

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e.target.value);
    }
    return null;
  };

  return (
    <div>
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <select name={name} onChange={(e) => handleChange(e)} {...attributes}>
        <option value="">{placeholder}</option>
        {data &&
          data.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {errors[name] && (
        <h6 className="text-danger">{errors?.[name]?.message}</h6>
      )}
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setvalue: PropTypes.func,
  register: PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.array,
  errors: PropTypes.object,
  defaultValue: PropTypes.string,
};
export default SelectField;
