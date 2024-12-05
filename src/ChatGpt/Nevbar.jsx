import LeftIcon from "./Navbar/LeftIcon";
import Profile from "./Navbar/Profile";
import "./Navbar.css"

export default function NavBar() {
    return (
        <div className="nav">
            <div className="leftName">
                <LeftIcon />
                <h3>Aiden <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></h3>
            </div>
            <Profile/>
        </div>
    )
}