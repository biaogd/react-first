import { Outlet } from 'react-router-dom'
import './MainContent.css'

export default function MainContent(props) {
    return (
        <div className="main-content">
            <div className='main-container'>
                <Outlet/>
            </div>
        </div>
    )
}