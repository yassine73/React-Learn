import propTypes from "prop-types";
import App from "../App";

function Student(props) {
  return (
    <>
      <div className="student">
        <p>Name: {props.name ? props.name : "Guest"}</p>
        <p>Age: {props.age ? props.age : 0}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

export default Student;

// in App

/*
import Student from "./Student";

function App() {
  return (
    <>
      <h1>Student List</h1>
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
*/
