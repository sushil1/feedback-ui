import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import Top from './components/Top';
import CommentStatus from './components/CommentStatus';
import CommentForm from './components/CommentForm';
import Footer from './components/Footer';

const CATEGORIES = [
  'Availability',
  'Staff Friendliness',
  'Information',
  'Loyalty Card',
  'Location',
  'Opening Hours',
  'Solutions',
  'Wait Time'
];

class App extends Component {
  state = {
    rating: {
      star: null,
      comment: '',
      selectedCategory: [],
      showFinalMessage: false
    }
  };

  onRating = (e, { rating }) =>
    this.setState({
      rating: {
        ...this.state.rating,
        star: rating
      }
    });

  handleCategorySelect = data =>
    this.setState({
      rating: {
        ...this.state.rating,
        selectedCategory: [...this.state.rating.selectedCategory, ...data]
      }
    });

  submitComment = comment => {
    this.setState({
      rating: {
        ...this.state.rating,
        comment,
        showFinalMessage: true
      }
    });
  };

  render() {
    const { rating } = this.state;
    if (rating.showFinalMessage) {
      console.log('Review received:', {
        star: rating.star,
        improvements: rating.selectedCategory,
        comment: rating.comment
      });
    }
    return (
      <Grid container>
        <Top />
        {rating.showFinalMessage ? (
          <Grid.Row style={{ height: '80vh', padding: '50px' }}>
            <Grid.Column widths={16} textAlign={'center'}>
              <Header as="h4" style={{ paddingTop: '30px' }}>
                Thank you for taking your time to help us understand you better.
              </Header>
            </Grid.Column>
          </Grid.Row>
        ) : (
          <Grid.Row>
            <CommentStatus
              star={rating.star}
              selected={rating.selectedCategory}
              comment={rating.comment}
            />
            <CommentForm
              star={rating.star}
              onRating={this.onRating}
              category={CATEGORIES}
              selectedCategory={rating.selectedCategory}
              submit={this.handleCategorySelect}
              submitComment={this.submitComment}
            />
          </Grid.Row>
        )}

        <Grid.Row style={{ height: '20vh' }}>
          <Grid.Column textAlign={'center'}>
            <span>x</span>
            <span>x</span>
            <span>x</span>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ height: '40vh' }} />
        <Footer />
      </Grid>
    );
  }
}

export default App;
