import { Avatar } from "@mui/material";

const Header = () =>{
  return(
    <div className="header">
      <Avatar alt="avatar" src="/avatar-icon.png" />
      <div className="header-greeting">
        <h4>Welcome!</h4>
        <p>John Doe</p>
      </div>
    </div>
  )
}
export default Header;
