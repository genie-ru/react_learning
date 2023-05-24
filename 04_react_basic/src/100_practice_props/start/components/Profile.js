import "./Profile.css";

const Profile = ({name = "John Doe", age = "??", country = "Japan"}) => {
  return (
    <div className="profile">
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>From: {country}</h3>
    </div>
  );
};


export default Profile;
