import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddBookCta = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>
        Add new book
        <Link to="/books/new"><Icon name="plus circle" size="massive" /></Link>
      </Card.Header>
    </Card.Content>    
  </Card>
);
export default AddBookCta;
