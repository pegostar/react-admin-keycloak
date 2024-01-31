import './LayoutMain.css'
import {Button, Dropdown, Layout, Menu, Modal, message, theme, Space} from "antd";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    AppstoreOutlined, DownOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, SettingOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import DropdownLogOut from "./DropdownLogOut.jsx";
import {AuthContext} from "react-oauth2-code-pkce";
import getMenu from "../Menu.jsx";
import { useTranslation } from 'react-i18next';


const { Header, Content, Sider } = Layout;

const LayoutMain = ({Components}) => {
    const {token, tokenData, logOut} = useContext(AuthContext)
    const { t } = useTranslation();
    const demistrifyToken = JSON.stringify(tokenData, null, 2);

    let username = "";
    if(demistrifyToken != null) {
        let completeToken = JSON.parse(demistrifyToken);
        username = completeToken.preferred_username;
    }



    function findItemByKey(items, targetKey) {
        for (let item of items) {
            if (item.key === targetKey) {
                return item;
            }
            if (item.children) {
                const found = findItemByKey(item.children, targetKey);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }

    const [collapsed, setCollapsed] = useState(false);
    const navigator = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onClickMenu = (event) => {
        let key = event.key;
        const resultItem = findItemByKey(getMenu(t), key);

        navigator(resultItem.path);
    };

    const [current, setCurrent] = useState('dashboard');
    return (
        <Layout className="index-Layout">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    {!collapsed ? <h1>React Admin</h1> : <h1>R</h1>}
                </div>
                <Menu theme="dark" onClick={onClickMenu} selectedKeys={[current]} mode="inline" items={getMenu(t)} />;
            </Sider>
            <Layout>
                <Header
                    className="header"
                    style={{ padding: 0, background: colorBgContainer }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="header-r-user">
                        <DropdownLogOut content={<div onClick={logOut}>LogOut</div>}>
                            <a href="#">{username}</a>
                        </DropdownLogOut>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >

                    <Components/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutMain;