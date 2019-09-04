import React from "react";
import { Container, Header } from "semantic-ui-react";
import "./App.css";
import { connect } from 'react-redux'

const App = props => {
    return (
      <>
        <Container>
          <Header as="h1">{props.greeting}</Header>
        </Container>
      </>
    );
  }

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting
  }
}

export default connect(mapStateToProps)(App);
