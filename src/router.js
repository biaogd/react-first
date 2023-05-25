import {
    createBrowserRouter
} from 'react-router-dom'

import Hello from './component/hello'
import About from './component/about'
import SideBar from './layout/SideBar'

const router = createBrowserRouter([
    {
        "path": "/",
        "Component": SideBar,
        children: [
            {
                "path": "/about",
                "Component": About
            },
            {
                "path":"/main",
                "Component": Hello
            }
        ]
    }
])

export {router};