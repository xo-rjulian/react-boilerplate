import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const style = { marginTop: '24px' };

const Home: React.SFC<{}> = () => {
  return (
    <div>
      <Header style={style} as="h2" icon={true} textAlign="center">
        <Icon name="home" circular={true} />
        <Header.Content>Welcome to Home Page - Please log in.</Header.Content>
      </Header>
    </div>
  );
};

export default Home;
