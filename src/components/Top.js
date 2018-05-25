import React from 'react';

import { Grid, Header } from 'semantic-ui-react';

const Top = () => (
  <Grid.Row centered>
    <Grid.Column
      width={16}
      textAlign={'center'}
      style={{ marginBottom: '20px', paddingTop: '50px' }}
    >
      <Header as="h3">HEADER</Header>
    </Grid.Column>
  </Grid.Row>
);

export default Top;
