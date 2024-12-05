import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TerminalIcon from '@mui/icons-material/Terminal';
import DescriptionIcon from '@mui/icons-material/Description';
import "./Buttons.css"

export default function Buttons({n}) {
    return (
        <div className="buttons">
            <Button variant="contained" className='btn' color='' startIcon={<ImageIcon sx={{color : "green"}}/>}>Create image</Button>
            <Button variant="contained" className='btn' color='' startIcon={<AnalyticsIcon sx={{color : "skyblue"}}/>}>Analytics</Button>
            <Button variant="contained" className='btn' color='' startIcon={<TerminalIcon sx={{color : "lightblue"}}/>}>Code</Button>
            <Button variant="contained" className='btn' color='' startIcon={<DescriptionIcon sx={{color : "orange"}}/>}>Summarize text</Button>
            <Button variant="contained" className='btn' color='' >more</Button>
        </div>
    )
}