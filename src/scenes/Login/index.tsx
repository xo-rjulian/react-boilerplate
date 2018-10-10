import { pathOr } from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import Authenticated from '../../components/Authenticated';
import ReduxForm from '../../components/Form';
import { authenticate } from '../../redux/actions/auth';
import { getAuth, getLoginForm } from '../../redux/selectors/auth';
import { getLoading } from '../../redux/selectors/loading';
import { getStorage } from '../../redux/selectors/storage';
import Card from './components/Card';

export interface IProps {
  onSubmit: any;
  auth: object;
  loading: { status: boolean };
  history: { push: FunctionConstructor };
  loginForm: { email: string; password: string };
}

const GridStyle = {
  height: '100%',
};

const Login: React.SFC<IProps> = ({
  auth,
  loginForm: { email, password },
  loading: { status },
  onSubmit,
}) => {
  const OnSubmit = (values: object) => {
    onSubmit(values);
  };

  const error = pathOr(false, ['error', 'response', 'data', 'error'], auth);

  return (
    <Grid style={GridStyle} centered={true}>
      <Grid.Row columns={3} verticalAlign="middle">
        <Grid.Column>
          <Card
            fluid={true}
            centered={true}
            title="Login"
            description="Please add your credentials to log in"
          >
            <ReduxForm
              form="login"
              error={error}
              noValidate={true}
              onSubmit={OnSubmit}
            >
              <Form.Field>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" component="input" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" component="input" />
              </Form.Field>
              <Message
                error={true}
                header="Could you check something!"
                content="That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."
              />
              <Button
                disabled={!email || !password}
                color="purple"
                loading={status}
                type="submit"
              >
                Log in
              </Button>
            </ReduxForm>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  auth: getAuth(state),
  loading: getLoading(state),
  loginForm: getLoginForm(state),
  storage: getStorage(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: authenticate(dispatch),
});

export default Authenticated({ name: '/login' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
