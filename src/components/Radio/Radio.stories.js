import React from 'react';
import RadioButtonField from './RadioButtonField';

export default {
  title: 'Form/Radio',
  component: RadioButtonField,
};

const Template = (args) => <RadioButtonField {...args} />;

export const Radiofield = Template.bind({});
Radiofield.args = {
  label: 'Radio',
  name: 'numbers',
  options: ['one', 'two', 'three'],
};

const RadioTemplate = (args) => <RadioButtonField {...args} />;

export const RadioWithError = RadioTemplate.bind({});
RadioWithError.args = {
  label: 'Radio',
  name: 'numbers',
  options: ['one', 'two', 'three'],
  placeholder: 'Enter Your Text',
  errors: {
    numbers: {
      message: 'Radio Field Required',
      type: 'required',
    },
  },
};
