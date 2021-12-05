import React, { Component } from 'react'

export class BookItem extends Component {  
   
    
    render() {
        const { title} = this.props.books;
        return (
            <div>
               {title.rendered}
            </div>
        )
    }
}

export default BookItem
