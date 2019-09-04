import React from "react";
import { Container, Header, Button, Input } from "semantic-ui-react";
import "./App.css";
import { connect } from 'react-redux'

const App = props => {
    return (
      <>
        <Container>
          <Header as="h1">{props.greeting}</Header>
          <Input 
          placeholder="type your greeting here"
          onBlur={(event) => {
            props.dispatch({type: 'PROPOSED_GREETING', payload: event.target.value})
          }
          }
          />
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
