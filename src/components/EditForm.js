import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from './Input/TextField';
import NumberField from './Input/NumberField';
import SelectField from './Select/SelectField';
import RadioButtonField from './Radio/RadioButtonField';

function EditForm(props) {
  const [name, setName] = useState('Default Text');
  const [number, setNumber] = useState(100);
  const [select, setSelect] = useState('Mumbai');
  const [radio, setRadio] = useState('Female');
  const [dataState, setDataState] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const radioButtonData = ['Male', 'Female', 'Other'];

  const selectData = [
    {
      name: 'Chennai',
      value: 'Chennai',
    },
    {
      name: 'Mumbai',
      value: 'Mumbai',
    },
    {
      name: 'Delhi',
      value: 'Delhi',
    },
  ];

  const submitButton = (data) => {
    console.log('data:', data);

    setName(data.name);
    setNumber(data.number);
    setSelect(data.select);
    if (data.gender) setRadio(data.gender);
    setDataState(true);
  };
  return (
    <div className="App">
      <h2 className="white">EDIT FORM</h2>
      <div className="center">
        <form onSubmit={handleSubmit(submitButton)}>
          <TextField
            placeholder="Text"
            label="Text Field"
            name="name"
            defaultValue={name}
            register={register({
              required: 'The name field is required.',
            })}
            errors={errors}
          />
          <br />
          <NumberField
            placeholder="Number"
            label="Number Field"
            name="number"
            defaultValue={number}
            register={register({
              required: 'The Number field is required.',
              minLength: {
                value: 2,
                message: 'Enter minimum two numbers',
              },
            })}
            errors={errors}
          />
          <br />
          <SelectField
            label="Select Field"
            name="select"
            placeholder="Select Meee"
            defaultValue={select}
            data={selectData}
            register={register({
              required: 'The Select field is required.',
            })}
            errors={errors}
          />
          <br />

          <RadioButtonField
            options={radioButtonData}
            label="Radio Button Field"
            name="gender"
            defaultChecked={radio}
            setvalue={setRadio}
            register={register({
              required: 'Select anyone option',
            })}
            errors={errors}
          />
          <input type="submit" className="SubmitBtn" value="SUBMIT" />
        </form>
      </div>
      {dataState && (
        <div className="data">
          <h2>Data</h2>
          <br />
          <h4>Text: {name}</h4>
          <h4>Number: {number}</h4>
          <h4>Select: {select}</h4>
          <h4>Radio: {radio}</h4>
        </div>
      )}
    </div>
  );
}

export default EditForm;
