import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
export class NewsItem extends Component {

    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }

    static propTypes = {
        car: PropTypes.object.isRequired
    };
    componentDidMount() {
       
        const {featured_media,author} = this.props.noticiasMundo;
        console.log(featured_media +" "+author);
        const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
        //const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);
        Promise.all([getImageUrl])
            .then(res => {
                console.log(res);
                this.setState({
                    imgUrl:res[0].data.media_details.sizes.full.source_url,
                    isLoaded:true
                })
            });
    }

    render() {
        const { link, title } = this.props.noticiasMundo;
        const {imgUrl,isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: title.rendered }}></h1>
                    <img style={{width:'100%'}} src={imgUrl} />
                    <li><a href={`${link}`}>{link}</a></li>
                </div>
    
            );
        }
        return <h2>Algo afallo</h2>;
        
    }
}

export default NewsItem
