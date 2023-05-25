import {Outlet} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {menuData} from '../mock/data'
import {Menu} from 'antd'
import './SideBar.css'

export default function SideBar(){

    const [items, setItems] = useState([]);


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