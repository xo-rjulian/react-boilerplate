import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { authenticate } from '../../redux/actions/auth';
import { getAuth } from '../../redux/selectors/auth';
import { getLoading } from '../../redux/selectors/loading';

export interface IConfig {
  name: string;
}

export interface IProps {
  history: { push: any };
  auth: { isAuthenticated: boolean };
  login: any;
  loading: { status: boolean };
}

export default (config: IConfig) => (WrapperComponent: any) => {
  class AuthenticatedComponent extends Component<IProps> {
    public componentWillReceiveProps(nextProps: IProps) {
      if (this.baseChecker(config.name)) {
        this.checker(nextProps);
      }
    }

    public componentDidMount() {
      this.checker(this.props);
    }

    public baseChecker = (base: string) => {
      const {
        location: { pathname },
      } = window;

      return base === pathname;
    };

    public checker = (props: IProps) => {
      const { history, auth, loading, login } = props;
      const user = window.localStorage.getItem('user');

      if (user && !auth.isAuthenticated && !loading.status) {
        const data = JSON.parse(Base64.decode(user));
        login(data);
      }

      if (auth.isAuthenticated && this.baseChecker('/login')) {
        history.push('/dashboard');
      }

      if (!auth.isAuthenticated && !this.baseChecker('/login')) {
        history.push('/login');
      }
    };

    public renderWithChecker = () => {
      const { auth } = this.props;
      const user = window.localStorage.getItem('user');

      if (user && !auth.isAuthenticated) {
        return null;
      }

      return <WrapperComponent />;
    };

    public render() {
      return <React.Fragment>{this.renderWithChecker()}</React.Fragment>;
    }
  }

  const mapStateToProps = (state: any) => ({
    auth: getAuth(state),
    loading: getLoading(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: authenticate(dispatch),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthenticatedComponent);
};
