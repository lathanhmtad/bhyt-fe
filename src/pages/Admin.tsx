import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import {Button, Image, Layout, Menu, theme} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import logo from '../assets/img/logoYte.png'

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
                            onClick: () => navigate('/')
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
                            onClick: () => navigate('/admin/khai-bao')
                        },
                        {
                            key: 'ho-so',
                            label: 'Hồ sơ',
                            onClick: () => navigate('/admin/ho-so')
                        },
                        {
                            key: 'dang-nhap',
                            label: 'Đăng nhập',
                            onClick: () => navigate('/login')
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className='d-flex justify-content-between pe-4' style={{padding: 0, background: colorBgContainer}}>
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

                    <Image
                        width={50}
                        src={logo}/>
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