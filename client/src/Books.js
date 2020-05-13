import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';
import API from './utils/Api';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books:[],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                this.setState({ books: [...data.body.items]}) //spread operator
                console.log('BOOKS', data);
            })
 }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }

    handleSavedBook = id => {
      console.log('onclick is a go', id)
      API.saveBook({id})
    }

  render () {
    return (
      <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        <BookList 
        books={this.state.books}
        saveBook={ this.handleSavedBook}
        
        />
      </div>
    );
  }
  
}

export default Books;
