import {DatePicker, FormProps, Radio} from 'antd';
import {Button, Col, Form, Image, Input, Row, Select, Upload} from 'antd';
import {CiCirclePlus} from "react-icons/ci";

import {UserRequest} from "../../models/User.ts";
import useUserCreateViewModel from "./UserCreate.vm.ts";

export default function UserCreate() {

    const {
        loading,
        handleSubmit,
        handleOpenPreview,
        handleChangeAvatarFile,
        avatarFile,
        form,
        previewOpen,
        previewImage,
        setPreviewOpen,
        setPreviewImage,
    } = useUserCreateViewModel()

    const onFinish: FormProps<UserRequest>['onFinish'] = (values) => {
        handleSubmit(values)
    };

    return <div className='client-contact'>
        <div className='container'>
            <h1 className='text-center'>Tạo mới người dùng</h1>
            <h4>Thông tin về người dùng</h4>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                disabled={loading}
                style={{width: '100%'}}
                initialValues={{}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Row gutter={[24, 0]}>
                    <Col span={16}>
                        <Row gutter={[24, 0]}>
                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="CCCD"
                                    name="cccd"
                                    rules={[{required: true, message: 'Vui lòng nhập căn cước công dân!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Họ và tên"
                                    name="hovaten"
                                    rules={[{required: true, message: 'Vui lòng nhập họ và tên!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Số điện thoại"
                                    name="sdt"
                                    rules={[{required: true, message: 'Vui lòng nhập số điện thoại!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Email"
                                    name="email"
                                    rules={[{required: true, message: 'Vui lòng nhập email!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Mật khẩu"
                                    name="matkhau"
                                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Ngày sinh"
                                    name="ngaysinh"
                                    rules={[{required: true, message: 'Vui lòng chọn ngày sinh'}]}
                                >
                                    <DatePicker
                                        style={{width: '100%'}}
                                    />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Giới tính"
                                    name='gioitinh'
                                    rules={[
                                        {required: true, message: 'Vui lòng chọn giới tính!'}
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value="M">Nam</Radio>
                                        <Radio value="F">Nữ</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Địa chỉ"
                                    name="diachi"
                                    rules={[{required: true, message: 'Vui lòng nhập địa chỉ!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Số BHYT"
                                    name="so_BHYT"
                                    rules={[{required: true, message: 'Vui lòng nhập bảo hiểm y tế!'}]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<UserRequest>
                                    label="Chức vụ"
                                    name='machucvu'
                                    rules={[{required: true, message: 'Vui lòng chọn chức vụ!'}]}
                                >
                                    <Select
                                        style={{width: '100%'}}
                                        options={[
                                            {value: '1', label: 'Người dân'},
                                            {value: '2', label: 'Cán bộ y tế'},
                                            {value: '3', label: 'Quản trị viên'},
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Form.Item<UserRequest>
                            className='form-image'
                            name="anhdaidien"
                            label="Hình ảnh"
                        >
                            <Upload
                                maxCount={1}
                                multiple
                                listType="picture-card"
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                fileList={avatarFile}
                                beforeUpload={() => false}
                                onChange={handleChangeAvatarFile}
                                onPreview={handleOpenPreview}
                            >
                                <button style={{border: 0, background: 'none'}} type="button">
                                    <CiCirclePlus/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <div className='d-flex justify-content-center gap-2 mt-3'>
                        <Button
                            loading={loading}
                            size='large' type="primary" style={{width: '8%'}} htmlType="submit">
                            Gửi
                        </Button>

                        <button className='btn btn-warning text-white'>Làm mới</button>
                    </div>
                </Form.Item>
            </Form>
        </div>

        {previewImage && (
            <Image
                wrapperStyle={{display: 'none'}}
                preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
            />
        )}
    </div>
}