import React from 'react';
import {
  AreaChart,
  BarChart,
  PieChart,
  ScatterPlot,
} from 'react-d3-components';
import { Grid, Header, Icon } from 'semantic-ui-react';
import Authenticated from '../../components/Authenticated';
import { data, tooltipScatter } from './helpers';

const style = {
  marginTop: '24px',
};

class Dashboard extends React.Component<{}, {}> {
  public render() {
    return (
      <Grid style={style}>
        <Header as="h2" icon={true} textAlign="center">
          <Icon name="chart line" circular={true} />
          <Header.Content>Chart Examples</Header.Content>
        </Header>
        <Grid.Row>
          <Grid.Column textAlign="center" width={8}>
            <BarChart
              data={data}
              width={400}
              height={400}
              margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
            />
          </Grid.Column>
          <Grid.Column textAlign="center" width={8}>
            <PieChart
              data={data[0]}
              width={600}
              height={400}
              margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
              sort={null}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" width={8}>
            <AreaChart
              data={data}
              width={400}
              height={400}
              yOrientation="right"
              margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
            />
          </Grid.Column>
          <Grid.Column textAlign="center" width={8}>
            <ScatterPlot
              data={data}
              width={400}
              height={400}
              margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
              tooltipHtml={tooltipScatter}
              xAxis={{ label: 'x-label' }}
              yAxis={{ label: 'y-label' }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Authenticated({ name: '/dashboard' })(Dashboard);
