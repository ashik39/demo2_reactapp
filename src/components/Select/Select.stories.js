import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Form/Select',
  component: SelectField,
};

// export const Selectfield = () => <SelectField placeholder="Select" />;

const Template = (args) => <SelectField {...args} />;

export const Selectfield = Template.bind({});
Selectfield.args = {
  label: 'Select',
  name: 'Select',
  data: [
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
  ],
  placeholder: 'Select',
};

const SelectTemplate = (args) => <SelectField {...args} />;

export const SelectWithError = SelectTemplate.bind({});
SelectWithError.args = {
  label: 'Select',
  name: 'Select',
  data: [
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
  ],
  placeholder: 'Select',
  errors: {
    Select: {
      message: 'Select Field Required',
      type: 'required',
    },
  },
};
