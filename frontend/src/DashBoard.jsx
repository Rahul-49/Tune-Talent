import {useState,useEffect} from 'react'
import './dashboard.css'
import 
function Dashboard()
{
    <>
    <div className="dashboard">
  <h1>Musician Dashboard</h1>

  <div className="profile-card">
    <img src={user.profilePic} alt="profile" />

    <h2>{user.name}</h2>

    <p>⭐ {user.rating}/5</p>

    <div className="about">
      <h3>About Musician</h3>
      <p>{user.about}</p>
    </div>
  </div>

  <div className="tunes-card">
    <h3>Tunes Composed</h3>

    <ul>
      {user.tunes.map((tune, index) => (
        <li key={index}>🎵 {tune}</li>
      ))}
    </ul>
  </div>
</div>
    </>
}
export default Dashboard