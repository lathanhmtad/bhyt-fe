import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout, Menu, Image} from 'antd';

const { Header } = Layout;
import logo from '../assets/img/logoYte.png'
import { Outlet, useNavigate } from 'react-router-dom';

export default function Client () {
    const navigate = useNavigate()

    return (
        <Layout>
            <Header className="header px-0">
                <Menu className='px-5' theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Image src={logo}
                           width={50}
                           />
                           <div style={{paddingRight: '400px'}}></div>
                        <Menu.Item key="trang-chu" onClick={() => navigate('/')}>Trang chủ</Menu.Item>
                        <Menu.Item key="khai-bao-y-te">Khai báo y tế</Menu.Item>
                        <Menu.Item key="thong-bao" onClick={() => navigate('/thong-bao')}>Thông báo</Menu.Item>
                        <Menu.Item key="dang-nhap" onClick={() => navigate('/login')}>Đăng nhập</Menu.Item>
                        <Menu.Item key="dang-ky" onClick={() => navigate('/sign-up')}>Đăng ký</Menu.Item>
                </Menu>
            </Header>
            
            <Outlet />
        </Layout>
    );
}
