import {Card, Col, Row, Avatar, Typography, Button, Form, Input, DatePicker, Radio, QRCode} from 'antd';
import {MailOutlined, PhoneOutlined, HomeOutlined} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import moment from 'moment';

import userDefault from '../../assets/img/defalt-user.png'

const {Title} = Typography;

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="container">
            <h1 className='mb-3'>Hồ sơ</h1>
            <Row justify="start" gutter={[24, 0]}>
                <Col span={16}>
                    <Card>
                        <Title level={4}>Thông tin cá nhân</Title>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Họ và tên" name="fullName">
                                        <Input defaultValue="Lê Bảo"/>
                                    </Form.Item>

                                    <Form.Item label="Giới tính" name="gender">
                                        <Radio.Group defaultValue="male">
                                            <Radio value="male">Nam</Radio>
                                            <Radio value="female">Nữ</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="CCCD" name="address">
                                        <Input defaultValue="12341241231"/>
                                    </Form.Item>
                                    <Form.Item label="Ngày sinh" name="dateOfBirth">
                                        <DatePicker defaultValue={moment('1990-01-01')} style={{width: '100%'}}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-end">
                                {isEditing ? (
                                    <Button type="primary" onClick={handleSave}>Save</Button>
                                ) : (
                                    <Button type="primary" onClick={handleEdit}>Edit</Button>
                                )}
                            </div>
                        </Form>
                    </Card>
                    <Card className="mt-4">
                        <Title level={4}>Thông tin liên hệ</Title>
                        <Form layout="vertical">
                            <Form.Item label="Email" name="email">
                                <Input defaultValue="lebao@gmail.com" prefix={<MailOutlined/>}/>
                            </Form.Item>
                            <Form.Item label="Số điện thoại" name="phone">
                                <Input defaultValue="+1 234 567 890" prefix={<PhoneOutlined/>}/>
                            </Form.Item>
                            <Form.Item label="Địa chỉ" name="contactAddress">
                                <Input defaultValue="123 Main Street, Hometown, USA" prefix={<HomeOutlined/>}/>
                            </Form.Item>
                            <div className="d-flex justify-content-end">
                                {isEditing ? (
                                    <Button type="primary" onClick={handleSave}>Save</Button>
                                ) : (
                                    <Button type="primary" onClick={handleEdit}>Edit</Button>
                                )}
                            </div>
                        </Form>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card>
                        <div className="d-flex flex-column align-items-center">
                            <Avatar size={100} src={userDefault}/>
                            <Title level={2} className="mt-3">Lê Bảo</Title>
                            <QRCode type="canvas" value="https://ant.design/" />
                        </div>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Profile;
