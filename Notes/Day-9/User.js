

//Explanation:
//state -> is a callback fn userinfo is from store and users is from slice

import React from 'react'
import { useSelector } from 'react-redux'

export const User = () => {
    const user=useSelector((state)=>state.userinfo.users);
    console.log(user);
  return (
    <div>user</div>
  )
}



//import React from "react";
// export const User = () => {
//   return (
//     <div className="user-container">
//       <h1>User Dashboard</h1>
//       <p>
//         Welcome, [User Name]! Here you can manage your account, review your activity, and access personalized settings.
//       </p>
//       <h2>Account Overview</h2>
//       <ul>
//         <li>Profile Details</li>
//         <li>Membership </li>
//         <li>Recent </li>
//       </ul>
//       <button>Edit Profile</button>
//       <button>Log Out</button>
//     </div>
//   );
// };
