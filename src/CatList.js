import React, { Component } from 'react'

class CatList extends Component {

  render () {
    // debugger
    const list = this.props.catPics.map(cat => <li> <img src={cat.url}/ ></li> )
    return (
      <div>{this.list}</div>
    )
  }

}

export default CatList
