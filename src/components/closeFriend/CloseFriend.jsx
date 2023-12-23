import "./closeFriend.css"

const CloseFriend = ({user}) => {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
    <span className="sideFriendName">{user.username}</span>
  </li> 
  )
}

export default CloseFriend