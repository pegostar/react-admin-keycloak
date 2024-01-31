import {AppstoreOutlined, MailOutlined, PieChartOutlined, SettingOutlined} from "@ant-design/icons";

function getMenu(translate) {
    const itemsMenu = [
        {
            label: translate("dashboard"),
            key: 'dashboard',
            icon: <PieChartOutlined />,
            path: '/'
        },
        {
            label: 'First',
            key: 'first',
            icon: <AppstoreOutlined />,
            disabled: false,
            path: '/first'
        },
        {
            label: 'Second',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                            path: '/detail'
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                            path: '/detail'
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                            path: '/detail'
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                            path: '/detail'
                        },
                    ],
                },
            ],
        }
    ];

    return itemsMenu;
}




export default getMenu;