import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NumberField from './Input/NumberField';
import TextField from './Input/TextField';
import SelectField from './Select/SelectField';
import RadioButtonField from './Radio/RadioButtonField';
import ModalPopup from './ModalPopup';

function CreateForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState('');
  const [popupState, setPopupState] = useState(false);
  const [dataState, setDataState] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const radioButtonData = ['Male', 'Female', 'Other'];

  const selectData = [
    {
      id: '1',
      name: 'Chennai',
    },
    {
      id: '2',
      name: 'Delhi',
    },
    {
      id: '3',
      name: 'Mumbai',
    },
    {
      id: '4',
      name: 'Kerala',
    },
  ];

  const handleConfirm = () => {
    setDataState(true);
    setPopupState(false);
  };

  const handleCancel = () => {
    setDataState(false);
    setPopupState(false);
  };

  const dataSet = (data) => {
    setName(data.name);
    setNumber(data.number);
    setSelect(data.select);
    setRadio(data.gender);
    setPopupState(true);
  };

  const submitButton = (data) => {
    console.log('data:', data);
    dataSet(data);
  };
  return (
    <div className="App">
      <h2 className="white">CREATE FORM</h2>
      {dataState ? (
        <div className="data">
          <h2>Data</h2>
          <br />
          <h4>Text: {name}</h4>
          <h4>Number: {number}</h4>
          <h4>Select: {select}</h4>
          <h4>Radio: {radio}</h4>
        </div>
      ) : (
        <div className="center">
          <form onSubmit={handleSubmit(submitButton)}>
            <TextField
              placeholder="Text"
              label="Text Field"
              name="name"
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
              placeholder="Select"
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
              register={register({
                required: 'Select anyone option',
              })}
              errors={errors}
            />

            <input type="submit" className="SubmitBtn" value="SUBMIT" />
          </form>
          <br />
        </div>
      )}

      {popupState && (
        <ModalPopup state={popupState}>
          <h2>Confirm Submission</h2>
          <br />
          <span>
            <button className="ModalBtn Left" onClick={handleCancel}>
              Cancel
            </button>
            <button className="ModalBtn Right" onClick={handleConfirm}>
              Confirm
            </button>
          </span>
        </ModalPopup>
      )}
    </div>
  );
}

export default CreateForm;
