import {Outlet} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {menuData, menuRoutes} from '../mock/data'
import {Menu} from 'antd'
import './SideBar.css'
import { useNavigate } from 'react-router-dom'

export default function SideBar(){

    const [items, setItems] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        let dd = []
        getMenuItem(menuData, dd);
        setItems(dd);
        console.log(dd)
    }, [])

    return (
        <>
            <div className='sidebar'>
            <div className='main-icon'>Device</div>

               <Menu 
              mode="inline"
               items={items}
               onClick={(obj)=> {
                console.log(obj);
                menuRoutes.forEach(it=>{
                    if(it.key == obj.key){
                        nav(it.path);
                    }
                })
                
               }}
               />
            </div>
            <div id='detail'>
                <Outlet/>
            </div>
        </>
    )
}

function getMenuItem(menuData, items){
    for(let d of menuData){
        let item = getItem(d.name, d.key, d.icon, null);
        if(d.children){
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