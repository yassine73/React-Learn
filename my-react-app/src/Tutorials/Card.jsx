import profilePic from "../assets/image.png";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="Profile Pic" />
      <h2>Yassine</h2>
      <p>I'm React beginner</p>
    </div>
  );
}

export default Card;
