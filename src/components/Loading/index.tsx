import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Loader, Segment } from 'semantic-ui-react';
import { getLoading } from '../../redux/selectors/loading';

export interface IProps {
  loading: { status: boolean };
}

const GridStyle = {
  background: 'rgba(0,0,0,.7)',
  bottom: 0,
  color: 'white',
  height: '100%',
  margin: 0,
  padding: '12px',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1,
};

const SegmentStyle = {
  background: 'transparent',
  border: 0,
  boxShadow: 'none',
};

const Loading: React.SFC<IProps> = ({ loading: { status } }) => {
  const renderWithLoading = () => {
    if (status) {
      return (
        <Grid style={GridStyle} centered={true}>
          <Grid.Row columns={3} verticalAlign="middle">
            <Grid.Column>
              <Segment style={SegmentStyle}>
                <Loader active={true} inline="centered" size="massive">
                  Loading
                </Loader>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }

    return null;
  };

  return renderWithLoading();
};

const mapStateToProps = (state: any) => ({
  loading: getLoading(state),
});

export default connect(mapStateToProps)(Loading);
