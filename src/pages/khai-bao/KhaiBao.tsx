import { Form, Input, Radio, Select, Button, Upload, Space, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


export default function KhaiBao() {
    const [form] = Form.useForm();


    return (
        <div className="health-declaration">
            <h1 className='text-center'>Tờ khai y tế</h1>
            <p className='mb-3 fs-6 text-center'>Trung thực khai báo những bệnh đã mắc phải trước khi vào thành phố.</p>
            <Form form={form} size='large' layout="vertical">
                <Form.Item name="declarationType" label="Loại khai báo" rules={[{ required: true, message: 'Vui lòng chọn loại khai báo!' }]}>
                    <Radio.Group>
                        <Radio value="Bệnh nhân">Bệnh nhân</Radio>
                        <Radio value="Khai hộ">Khai hộ</Radio>
                    </Radio.Group>
                 </Form.Item>
                <Row gutter={[24, 0]}>
                        <Col span={12}>
                            <Form.Item name="citizenID" label="Căn cước công dân" rules={[{ required: true, message: 'Vui lòng nhập căn cước công dân!' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="relativeID" label="Số CCCD của người khai (nếu khai hộ)">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                <Form.Item name="commonDisease" label="Bệnh phổ biến" rules={[{ required: true, message: 'Vui lòng chọn bệnh phổ biến!' }]}>
                    <Select>
                        <Select.Option value="Sốt xuất huyết">Sốt xuất huyết</Select.Option>
                        <Select.Option value="Nổi ban đỏ">Nổi ban đỏ</Select.Option>
                    </Select>
                </Form.Item>
                
                <Form.Item name="otherDisease" label="Hoặc bệnh khác">
                    <Input />
                </Form.Item>
                
                <Form.Item name="symptoms" label="Có triệu chứng">
                    <Input.TextArea />
                </Form.Item>
                
                <Form.Item name="travelHistory" label="Lịch trình">
                    <Input.TextArea />
                </Form.Item>
                
                <Form.Item name="proof" label="Tải lên minh chứng">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Tải lên</Button>
                    </Upload>
                </Form.Item>
                
                <Form.Item>
                    <Space>
                        <Button type="default" onClick={() => form.resetFields()}>Hủy bỏ</Button>
                        <Button type="primary" htmlType="submit">Lưu thông tin</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}
