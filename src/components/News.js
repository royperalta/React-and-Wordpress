import React, { Component } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
export class News extends Component {

    state = {
        noticiasMundo: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get("/wp-json/wp/v2/posts?categories=38")
            .then(
             response => this.setState({ 
                    noticiasMundo : response.data,
                    isLoaded:true
             })
            )
            .catch(error => console.log(error))
    }

    render() {
        const {noticiasMundo,isLoaded} = this.state;

        if(isLoaded){
            return (
                <p>{noticiasMundo.map(noticia => 
                (<NewsItem key={noticia.id} noticiasMundo={noticia}><br></br></NewsItem>)
                )}</p>
             )
        }
        return (<h3>Is Loading</h3>)
    }
}

export default News
