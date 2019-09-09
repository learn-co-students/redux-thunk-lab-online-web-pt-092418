import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';

class App extends Component {   
  componentDidMount(){
    
  }
  
  render() {
    const catPicture = this.props.pictures.map(pictures => <li key={pictures.id}>{pictures}</li>)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook
              {catPicture}
              </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

mapStateToProps = ({pictures}) => ({ pictures})

mapDispatchToProps = dispatch => ({
  fetchCats: cats => dispatch({ type: 'FETCH_CAT', pictures: cats })
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

