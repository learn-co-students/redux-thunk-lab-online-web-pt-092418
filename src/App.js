import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';

class App extends Component {   
  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    const catPicture = this.props.pictures.map(picture => <li key={picture.id}>{picture}</li>)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook
              <img>
              {catPicture}/>
              </img>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({pictures}) => ({ pictures})

const mapDispatchToProps = dispatch => ({
  fetchCats: cats => dispatch({ type: 'FETCH_CAT', pictures: cats })
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

