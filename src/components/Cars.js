import React, { Component } from 'react'
import axios from 'axios'
import CarItem from './CarItem'
export class Cars extends Component {

    state = {
        cars:[],
        isLoaded:false
    }

   componentDidMount() {
       console.log("hola")
       axios.get('http://localhost/wordpress/wp-json/wp/v2/cars')
       .then(response =>this.setState({
           cars: response.data,
           isLoaded:true
       }))
       .catch(err => console.log(err))
   }

    render() {
        const {isLoaded,cars} = this.state;
        console.log(this.state);
        if(isLoaded){
            return (
               <h2>{cars.map(car => 
               (<CarItem key={car.id} cars={car}></CarItem>)
               )}</h2>
            )
        }
       return <h2>Loading...</h2>
    }
}

export default Cars
