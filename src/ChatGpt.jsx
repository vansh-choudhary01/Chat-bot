import './ChatGpt.css'
import Home from './ChatGpt/Home'
import NavBar from './ChatGpt/Nevbar'
import CopyRight from './ChatGpt/CopyRight'

export default function Gpt() {
    return (
        <div className="main">
            <NavBar/>
            <Home/>
            <CopyRight/>
        </div>
    )
}