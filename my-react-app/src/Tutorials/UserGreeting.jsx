import propTypes from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <div className="alert alert-success">welcome {props.username}</div>
  );
  const loginPrompt = (
    <div className="alert alert-danger">Please back to login</div>
  );

  return <>{props.isLoggedIn ? welcomeMessage : loginPrompt}</>;
}

// variables to be required
UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};

export default UserGreeting;

// in App.jsx
/*
import UserGreeting from "./UserGreeting";

function App() {
  let username = "";
  if (username === "") username = "Guest";
  return (
    <>
      <UserGreeting isLoggedIn={true} username={username} />
    </>
  );
}

export default App;
*/
