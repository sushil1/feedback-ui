import React from 'react';
import { Grid, Header, Rating, Button, Divider } from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CommentStatus = ({ star, selected }) => (
  <Grid.Column width={16} textAlign={'center'} stretched>
    <ReactCSSTransitionGroup
      transitionName="commentStatus"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      {star === null ? (
        <div style={{ padding: '20px' }}>
          <Header as="h4">RATE YOUR EXPERIENCE </Header>
          <p style={{ color: 'blue', fontSize: '18px' }}>
            Please rate your recent experience with us.
          </p>
          <Divider />
        </div>
      ) : (
        <div style={{ padding: '20px' }}>
          <Rating rating={star} maxRating={5} size="huge" disabled />
        </div>
      )}

      {star != null && selected.length === 0 ? (
        <div style={{ padding: '20px' }}>
          {star > 3 ? (
            <p style={{ color: 'blue', fontSize: '18px' }}>What went well?</p>
          ) : (
            <p style={{ color: 'blue', fontSize: '18px' }}>
              What could have been improved?
            </p>
          )}

          <span>Select one or more</span>
          <br />
          <Divider />
        </div>
      ) : (
        <div>
          {selected.map((item, i) => (
            <Button
              style={{ margin: '2%' }}
              key={i}
              size={'small'}
              content={item}
              color="blue"
              basic
            />
          ))}
          {selected.length !== 0 && (
            <p style={{ color: 'blue', fontSize: '18px' }}>
              Can you tell us more about your experience?
            </p>
          )}
        </div>
      )}
    </ReactCSSTransitionGroup>
  </Grid.Column>
);

export default CommentStatus;
