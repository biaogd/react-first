import './HeaderBar.css'
import { Dropdown, message, Avatar, Space } from 'antd'
import { useMemo, useState } from 'react'
import { languages } from '../mock/data'
import { DownOutlined, UserOutlined } from '@ant-design/icons'


export default function HeaderBar(props) {

    const items = useMemo(() => {
        return languages
    }, [languages])

    let [lan, setLan] = useState(items[0])

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    return (
        <div className="header-bar">
            <div><strong>艾拉比物联网云平台</strong></div>
            <div className='header-left'>
                <Space>
                <Dropdown
                    menu={{
                        items,
                        onClick,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        {lan.label} <DownOutlined size={"small"}/>
                    </a>
                </Dropdown>
                <Avatar size={40} icon={<UserOutlined />}/>
                </Space>
            </div>
        </div>
    )
}