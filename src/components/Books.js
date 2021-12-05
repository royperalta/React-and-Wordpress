import React, { Component } from 'react'
import axios from 'axios'
import BookItem from './BookItem'
export class Books extends Component {

    state = {
        books: [],
        isLoaded:false,
        car:[]
    }

    componentDidMount() {
        axios.get('http://localhost/wordpress/wp-json/wp/v2/books')
        .then(res => this.setState({
            books: res.data,
            isLoaded:true}))
        .catch(err => console.log(err))
    }

    render() {
         const {books, isLoaded} = this.state;
        if(isLoaded){          
              return (
                  <div>
                      {books.map(book =>(
                         // <h4>{books.title.rendered}</h4>
                         <BookItem books={book} key={book.id} ></BookItem>
                      ))}
                  </div>
              );
        }
        return <h3>Loading...</h3>
        
    }
}

export default Books
