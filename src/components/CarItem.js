import React, { Component } from 'react'

export class CarItem extends Component {

    render() {         
    const {link} = this.props.cars;
        return (
            <div>
              <a href={`${link}`}>{link}</a>
            </div>
        )
    }
}

export default CarItem
