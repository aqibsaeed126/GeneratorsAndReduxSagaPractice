import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <div>Your age : {props.age}</div>
      <button onClick={props.onAgeUp}>Age Up</button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'ON_AGE_UP',value: 1}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App)

