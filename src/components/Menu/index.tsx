import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Button, Header, Menu, MenuItemProps } from 'semantic-ui-react';
import { logout } from '../../redux/actions/auth';
import { getAuth } from '../../redux/selectors/auth';

export interface IProps {
  auth: { isAuthenticated: boolean };
  logout: any;
  history: { push: any };
}

const headerStyle = {
  cursor: 'pointer',
  padding: '12px',
};

class StaticMenu extends Component<IProps> {
  public state = { activeItem: 'home' };

  public handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    { name }: MenuItemProps
  ) => this.setState({ activeItem: name });

  public handleLogout = () => {
    const {
      history: { push },
      // tslint:disable-next-line:no-shadowed-variable
      logout,
    } = this.props;

    logout();
    push('/login');
  };

  public goToHome = () => {
    this.props.history.push('/');
  };

  public renderItems = () => {
    const { activeItem } = this.state;
    const { auth } = this.props;

    if (auth.isAuthenticated) {
      return (
        <React.Fragment>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
        </React.Fragment>
      );
    }

    return (
      <Header
        style={headerStyle}
        onClick={this.goToHome}
        as="h3"
        image="src/assets/icons/logo.jpg"
        content="Merchant Portal"
      />
    );
  };

  public renderSubMenu = () => {
    const { auth } = this.props;

    if (auth.isAuthenticated) {
      return (
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="purple" onClick={this.handleLogout}>
              Log Out
            </Button>
          </Menu.Item>
        </Menu.Menu>
      );
    }

    return (
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/login">
            <Button color="purple">Log In</Button>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    );
  };

  public render() {
    return (
      <Menu size="small">
        {this.renderItems()}
        {this.renderSubMenu()}
      </Menu>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: getAuth(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: logout(dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StaticMenu)
);
