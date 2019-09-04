import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import "./App.css";
import { connect } from 'react-redux'

const App = props => {
    return (
      <>
        <Container>
          <Header as="h1">{props.greeting}</Header>
          <Button
          primary
          onClick={() => {
            props.dispatch({type: 'CHANGE_GREETING', payload: 'New Hello World from Dispatch'})
          }}>
            Click Me!
          </Button>
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
