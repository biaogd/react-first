import {
    HomeOutlined,
    AppstoreAddOutlined,
    DeploymentUnitOutlined,
    CommentOutlined
} from '@ant-design/icons'

const menuData = [
    {
        "name":"首页",
        "key":"main_page",
        "icon": <HomeOutlined />,
    },
    {
        "name":"产品管理",
        "key":"product_management",
        "icon": <AppstoreAddOutlined />,
        "children": [
            {
                "name":"产品列表",
                "key":"product_list"
            },
            {
                "name":"零件列表",
                "key":"part_list"
            },
            {
                "name":"产品零件关联",
                "key":"product_part_link"
            }
        ]
    },
    {
        "name":"设备管理",
        "key":"device_management",
        "icon": <DeploymentUnitOutlined />,
        "children": [
            {
                "name":"设备列表",
                "key":"device_list"
            },
            {
                "name":"群组管理",
                "key":"group_management"
            },
            {
                "name": "生产管理",
                "key":"produce_management"
            }
        ]
    },
    {
        "name":"消息管理",
        "key":"message_management",
        "icon": <CommentOutlined />,
        "children":[
            {
                "name":"消息推送",
                "key":"message_push"
            },
            {
                "name":"告警管理",
                "key":"alarm_management"
            },
            {
                "name":"通知配置",
                "key":"notify_management"
            }
        ]
    }
]

const menuRoutes = [
    {
        "key":"main_page",
        "path":"/home"
    },
    {
        "key":"product_list",
        "path":"/product/productmgmt/list",
        "openKey":"product_management"
    }
]

export {menuData, menuRoutes}