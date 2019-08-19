import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import "./App.css";

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

export default App;
