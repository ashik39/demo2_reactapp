import React from 'react';
import InputComponent from './TextField';

export default {
  title: 'Form/Input',
  component: InputComponent,
};

const Template = (args) => <InputComponent {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  name: 'name',
  placeholder: 'Enter Text',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  label: 'Number',
  name: 'Number',
  placeholder: 'Enter Number',
};

const InputTemplate = (args) => <InputComponent {...args} />;

export const TextWithError = InputTemplate.bind({});
TextWithError.args = {
  type: 'text',
  label: 'text',
  name: 'text',
  placeholder: 'Enter Text',
  errors: {
    text: {
      message: 'Text Field Required',
      type: 'required',
    },
  },
};

export const NumberWithError = InputTemplate.bind({});
NumberWithError.args = {
  type: 'number',
  label: 'Number',
  name: 'Number',
  placeholder: 'Enter Number',
  errors: {
    Number: {
      message: 'Number Field Required',
      type: 'required',
    },
  },
};
