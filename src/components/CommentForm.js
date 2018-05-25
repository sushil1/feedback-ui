import React, { Component } from 'react';
import {
  Grid,
  Rating,
  Divider,
  Button,
  Form,
  TextArea
} from 'semantic-ui-react';

class CommentForm extends Component {
  state = {
    selected: [],
    comment: ''
  };

  handleSelectCategory = item =>
    this.setState({
      selected: [...this.state.selected, item]
    });

  submitCategory = () => {
    if (this.state.selected.length === 0) {
      return;
    }
    this.props.submit(this.state.selected);
  };

  onChange = e =>
    this.setState({
      [e.target.id]: e.target.value
    });

  submitComment = e => {
    e.preventDefault();
    this.props.submitComment(this.state.comment);
  };

  render() {
    const { star, category, selectedCategory } = this.props;
    const { selected } = this.state;
    return (
      <Grid.Column width={16} textAlign={'center'}>
        {star == null && (
          <div style={{ padding: '50px' }}>
            <Rating
              size="massive"
              maxRating={5}
              rating={star}
              onRate={(e, data) => this.props.onRating(e, data)}
            />
          </div>
        )}
        {star !== null &&
          selectedCategory.length === 0 && (
            <div>
              {category.map((item, i) => (
                <Button
                  style={{ margin: '2%' }}
                  key={i}
                  content={item}
                  onClick={() => this.handleSelectCategory(item)}
                  className={
                    selected.indexOf(item) !== -1 ? 'primary' : 'basic'
                  }
                />
              ))}
            </div>
          )}

        {star !== null &&
          selectedCategory.length !== 0 && (
            <Form>
              <Divider />
              <TextArea
                rows={5}
                autoHeight
                id="comment"
                onChange={e => this.onChange(e)}
                style={{ border: 'none' }}
                placeholder="Start typing your comments..."
              />
            </Form>
          )}
        <Divider />

        {star !== null &&
          selectedCategory.length === 0 && (
            <div>
              <Button
                circular
                onClick={this.submitCategory}
                icon="checkmark"
                primary
              />
              <span>Done</span>
            </div>
          )}

        {star !== null &&
          selectedCategory.length !== 0 && (
            <div>
              <span>No</span>{' '}
              <Button circular onClick={this.submitComment} icon="close" />
              <Button
                circular
                onClick={this.submitComment}
                icon="checkmark"
                primary
              />
              <span>Done</span>
            </div>
          )}
      </Grid.Column>
    );
  }
}

export default CommentForm;
