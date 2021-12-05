import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        const {link,title} = this.props.noticiasMundo;
        return (
            <div>                
                <h1 dangerouslySetInnerHTML={{__html:title.rendered}}></h1>               
                <li><a href={`${link}`}>{link}</a></li> 
            </div>
                      
        )
    }
}

export default NewsItem
