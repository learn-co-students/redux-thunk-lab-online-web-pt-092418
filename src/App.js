import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'
// import { bindActionCreators } from 'redux'

class App extends Component {


  componentDidMount() {
    this.props.fetchCats()
    // debugger
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <hr></hr>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    catPics: state.pictures
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(fetchCats, dispatch)
//   }
// }
export default connect(mapStateToProps, {fetchCats})(App)
