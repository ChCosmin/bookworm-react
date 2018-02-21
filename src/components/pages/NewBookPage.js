import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Header } from 'semantic-ui-react';
import axios from 'axios';
import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';
import { createBook } from '../../actions/books';


class NewBookPage extends React.Component {
  state = {
    book: null
  }

  onBookSelect = book => {
    this.setState({ book });
    axios.get(`/api/books/fetchBookInfo?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.info)
      .then(info => this.setState({ book: { ...book, link: info.link, pages:info.pages, description:info.description } }))
  };

  addBook = book => this.props.createBook(book)
    .then(() => this.props.history.push('/'));
  

  render() {
    return (
      <Segment>
        <Header textAlign="center">Add new book to your collection</Header>
        <SearchBookForm onBookSelect={this.onBookSelect}/>

        {this.state.book && <BookForm submit={this.addBook} book={this.state.book}/>}
      </Segment>
    );
  }
}

NewBookPage.propTypes = {
  createBook: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createBook } )(NewBookPage);