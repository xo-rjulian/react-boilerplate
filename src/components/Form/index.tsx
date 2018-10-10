import React from 'react';
import { reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';

interface IProps {
  form: string;
  error: boolean;
  noValidate: boolean;
  onSubmit: any;
  handleSubmit: any;
}

const DynamicForm: React.SFC<IProps> = ({
  error,
  noValidate,
  handleSubmit,
  children,
}) => {
  return (
    <Form error={error} noValidate={noValidate} onSubmit={handleSubmit}>
      {children}
    </Form>
  );
};

export default reduxForm({ destroyOnUnmount: false })(DynamicForm);
