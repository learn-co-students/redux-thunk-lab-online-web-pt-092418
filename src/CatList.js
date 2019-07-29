import React, { Component } from 'react'

class CatList extends Component {

  render () {
    // debugger
    const list = this.props.catPics.map((cat, index) => <img  key={index} src={cat.url} height="20%" width="20%" alt="catImage" /> )
    return (
      <div>{list}</div>
    )
  }

}

export default CatList
