import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allBooksSelector } from '../../reducers/books';
import AddBookCta from '../ctas/AddBookCta';
import { fetchBooks } from '../../actions/books';

class DashboardPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = (props) => props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;
    return (
      <div>
        {!isConfirmed && <ConfirmEmailMessage />}
        {isConfirmed && 
        <div>
          <Header size="huge" textAlign="center">Welcome to Dashboard</Header>
          {books.length === 0 ? <AddBookCta /> : <p>You have books!</p>}
        </div>
        }
      </div>
    )
  }
};
DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  }
}

export default connect(mapStateToProps, { fetchBooks })(DashboardPage);