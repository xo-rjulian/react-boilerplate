import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const style = { marginTop: '24px' };

const NotFound: React.SFC<{}> = () => {
  return (
    <div>
      <Header style={style} as="h2" icon={true} textAlign="center">
        <Icon name="configure" circular={true} />
        <Header.Content>We're sorry - Page not found.</Header.Content>
      </Header>
    </div>
  );
};

export default NotFound;
