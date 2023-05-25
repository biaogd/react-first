import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { menuData, menuRoutes } from '../mock/data'
import { Menu } from 'antd'
import './SideBar.css'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {

    const [items, setItems] = useState([]);
    const nav = useNavigate();
    let [activeKey, setActiveKey] = useState("")
    let [clickKey, setClickKey] = useState("");
    let [openKey, setOpenKey] = useState([])

    useEffect(() => {
        let dd = []
        getMenuItem(menuData, dd);
        setItems(dd);
        console.log(dd);
        const pathname = location.pathname;
        menuRoutes.forEach(it => {
            if (pathname == it.path) {
                setActiveKey(it.key);
                console.log(pathname)
                setOpenKey(it.openKey ? [it.openKey] : [])
            }
        })
    }, []);

    useEffect(() => {
        const pathname = location.pathname;
        menuRoutes.forEach(it => {
            if (pathname == it.path) {
                setActiveKey(it.key);
                console.log(pathname)
                setOpenKey(it.openKey ? [it.openKey] : [])
            }
        })
    }, [clickKey])

    return (
        <>
            <div className='sidebar'>
                <div className='main-icon'>Device</div>

                <Menu
                    mode="inline"
                    items={items}
                    activeKey={activeKey}
                    selectedKeys={[activeKey]}
                    openKeys={openKey.length>0 ? openKey : undefined}
                    onClick={(obj) => {
                        console.log(obj);
                        setClickKey(obj.key)
                        menuRoutes.forEach(it => {
                            if (it.key == obj.key) {
                                nav(it.path);
                                
                            }
                        })

                    }}
                    onOpenChange={(openkeys)=>{
                        setOpenKey(openkeys)
                    }}
                />
            </div>
            <div id='detail'>
                <Outlet />
            </div>
        </>
    )
}

function getMenuItem(menuData, items) {
    for (let d of menuData) {
        let item = getItem(d.name, d.key, d.icon, null);
        if (d.children) {
            item.children = [];
            getMenuItem(d.children, item.children);
        }
        items.push(item)
    }
}

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}