import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import ShelfChanger from '../ShelfChanger/ShelfChanger';

class Book extends Component {
  render() {
    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${!this.props.book.imageLinks
                    ? 'No image'
                    : (this.props.book.imageLinks.smallThumbnail || this.props.book.imageLinks.thumbnail)})`}}>
                </div>

                <ShelfChanger />

              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
          </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,

}

export default Book
