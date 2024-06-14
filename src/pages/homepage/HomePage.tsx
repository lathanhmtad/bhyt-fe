import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout, Menu, Card, Row, Col, Typography, Button, Input, List, Form, Image} from 'antd';
import { MailOutlined, PhoneOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
import banner from '../../assets/img/banner.png'
import logo from '../../assets/img/logoYte.png'
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Layout>
            <Header className="header px-0">
                <Menu className='px-5' theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Image src={logo}
                           width={50}
                           />
                           <div style={{paddingRight: '400px'}}></div>
                        <Menu.Item key="1">Trang chủ</Menu.Item>
                        <Menu.Item key="2">Khai báo y tế</Menu.Item>
                        <Menu.Item key="3" onClick={() => navigate('/login')}>Đăng nhập</Menu.Item>
                        <Menu.Item key="4" onClick={() => navigate('/sign-up')}>Đăng ký</Menu.Item>
                </Menu>
            </Header>

            <img src={banner}/>

            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {/* Hero Section */}
                    
                    <Row justify="center" style={{ marginTop: '20px' }}>
                        <Col span={24} className="text-center">
                            <Title level={1}>Protected Together</Title>
                            <Text>Information about protection against diseases and more.</Text>
                            <br />
                            <Button type="primary" size="large" icon={<PhoneOutlined />}>Call Us</Button>
                            <Button type="default" size="large" style={{ marginLeft: '10px' }}>Contact Us</Button>
                        </Col>
                    </Row>

                    {/* Sign-up Form */}
                    {/* <Row justify="center" style={{ marginTop: '40px' }}>
                        <Col xs={24} sm={24} md={12}>
                            <Card title="Sign up for Online Consultation">
                                <Form>
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input prefix={<UserOutlined />} placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                            Sign Up
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row> */}

                    {/* World Leader in Testing */}
                    <Row justify="center" style={{ marginTop: '40px' }}>
                        <Title level={2}>World Leader in Testing</Title>
                    </Row>
                    <Row gutter={[16, 16]}>
                        {['Advanced Labs', 'Comprehensive Reports', 'Accurate & Reliable Results'].map((text, index) => (
                            <Col xs={24} sm={12} md={8} key={index}>
                                <Card hoverable>
                                    <Title level={5}>{text}</Title>
                                    <Text>Detailed description about the service.</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Immunization Tips */}
                    <Row justify="center" style={{ marginTop: '40px' }}>
                        <Title level={2}>Immunization Tips</Title>
                    </Row>
                    <Row gutter={[16, 16]}>
                        {['Safe & Effective', 'Personal Protection', 'Immunity Passports', 'Antibody Testing'].map((tip, index) => (
                            <Col xs={24} sm={12} md={6} key={index}>
                                <Card hoverable>
                                    <Title level={5}>{tip}</Title>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* FAQ and Myths */}
                    <Row justify="center" style={{ marginTop: '40px', backgroundColor: '#f0f0f0', padding: '20px' }}>
                        <Col span={24} className="text-center">
                            <Title level={3}>FAQ's and Myths About Vaccination</Title>
                            <Row gutter={[16, 16]}>
                                {['Why should I get vaccinated?', 'What are the side effects?', 'Can the vaccine give me COVID-19?'].map((faq, index) => (
                                    <Col xs={24} sm={12} md={8} key={index}>
                                        <Card hoverable>
                                            <Title level={5}>{faq}</Title>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>

                    {/* Latest News */}
                    <Row justify="center" style={{ marginTop: '40px' }}>
                        <Title level={2}>Latest News</Title>
                    </Row>
                    <Row gutter={[16, 16]}>
                        {['Latest Update on COVID-19', 'New Health Guidelines', 'Upcoming Vaccine Trials'].map((news, index) => (
                            <Col xs={24} sm={12} md={8} key={index}>
                                <Card hoverable>
                                    <Title level={5}>{news}</Title>
                                    <Text>Short description of the news article.</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Row justify="center" style={{ marginBottom: '20px' }}>
                    <Col span={24} className="text-center">
                        <Title level={4}>Stay updated on our latest news and medical guides</Title>
                        <Input.Search
                            placeholder="Enter your email address"
                            enterButton="Subscribe"
                            size="large"
                            style={{ maxWidth: '400px', margin: '0 auto' }}
                        />
                    </Col>
                </Row>
                <Row justify="space-around" style={{ marginTop: '20px' }}>
                    <Col>
                        <Title level={5}>Contact Us</Title>
                        <Text>+001 123 456 789</Text>
                        <Text>support@company.com</Text>
                    </Col>
                    <Col>
                        <Title level={5}>Quick Links</Title>
                        <List>
                            <List.Item>About Us</List.Item>
                            <List.Item>Privacy Policy</List.Item>
                            <List.Item>Terms & Conditions</List.Item>
                        </List>
                    </Col>
                    <Col>
                        <Title level={5}>Follow Us</Title>
                        <List>
                            <List.Item>Facebook</List.Item>
                            <List.Item>Twitter</List.Item>
                            <List.Item>LinkedIn</List.Item>
                        </List>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
};

export default HomePage;
