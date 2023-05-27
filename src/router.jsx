import {
    createBrowserRouter
} from 'react-router-dom'

import Hello from './component/hello'
import About from './component/about'
import SideBar from './layout/SideBar'
import MainContent from './layout/MainContent'

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
            },
            {
                "path":"/home",
                element: <h1>Home</h1>
            },
            {
                path: "/product/productmgmt/list",
                element: <h1>Hello</h1>
            }
        ]
    }
])

export {router};