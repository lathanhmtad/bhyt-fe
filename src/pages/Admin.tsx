import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";

const {Header, Sider, Content} = Layout;

const Admin: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const navigate = useNavigate()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: 'trang-chu',
                            label: 'Trang chủ',
                        },
                        {
                            key: 'quan-ly-nguoi-dung',
                            label: 'Quản lý người dùng',
                            onClick: () => navigate('/admin/quan-ly-nguoi-dung')
                        },
                        {
                            key: 'quan-ly-thong-bao',
                            label: 'Quản lý thông báo',
                            onClick: () => navigate('/admin/quan-ly-thong-bao')
                        },
                        {
                            key: 'quan-ly-benh-dich',
                            label: 'Quản lý bệnh dịch',
                            onClick: () => navigate('/admin/quan-ly-benh-dich')
                        },
                        {
                            key: 'khai-bao-y-te',
                            label: 'Khai báo y tế',
                        },
                        {
                            key: 'ho-so',
                            label: 'Hồ sơ',
                        },
                        {
                            key: 'dang-nhap',
                            label: 'Đăng nhập',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Admin;