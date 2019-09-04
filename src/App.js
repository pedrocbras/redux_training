import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import "./App.css";
import { connect } from 'react-redux'

class App extends Component {
  state = {
    greeting: 'Hello World from Component State'
  }
  render() {
    return (
      <>
        <Container>
          <Header as="h1">{this.state.greeting}</Header>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);
