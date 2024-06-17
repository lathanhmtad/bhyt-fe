import logoYte from '../../assets/img/logoYte.png'
import {Button, Form, FormProps, Input, Radio} from "antd";
import {UserRequest} from "../../models/User.ts";
import useSignUpViewModel from "./SignUp.vm.ts";
import {Link} from "react-router-dom";

export default function SignUp() {

    const {
        loading,
        handleSubmit,
        form,
    } = useSignUpViewModel()

    const onFinish: FormProps<UserRequest>['onFinish'] = (values) => {
        handleSubmit(values)
    };

    return (
        <div className="sign-up">
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-heading">
                            <span className='d-flex justify-content-center mb-3'><img style={{
                                borderRadius: "15px"
                            }} src={logoYte} alt=""/></span>
                            <h2 className="title">Đăng ký tài khoản</h2>
                            <h4 className="title">Hệ thống khai báo y tế thành phố Đà Nẵng</h4>
                        </div>
                        <div className="card-body">

                            <Form
                                form={form}
                                name="basic"
                                labelAlign='left'
                                size='large'
                                labelCol={{span: 4}}
                                wrapperCol={{span: 24}}
                                disabled={loading}
                                style={{width: '100%'}}
                                initialValues={{}}
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item<UserRequest>
                                    label="CCCD"
                                    name="cccd"
                                    rules={[{required: true, message: 'Vui lòng nhập căn cước công dân!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item<UserRequest>
                                    label="Email"
                                    name="email"
                                    rules={
                                        [
                                            {required: true, message: 'Vui lòng nhập email!'},
                                            {re}

                                        ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item<UserRequest>
                                    label="Mật khẩu"
                                    name="matkhau"
                                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu!'}]}
                                >
                                    <Input/>
                                </Form.Item>

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

                                <Form.Item<UserRequest>
                                    label="Địa chỉ"
                                    name="diachi"
                                    rules={[{required: true, message: 'Vui lòng nhập địa chỉ!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item<UserRequest>
                                    label="Số BHYT"
                                    name="so_BHYT"
                                    rules={[{required: true, message: 'Vui lòng nhập bảo hiểm y tế!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item>
                                    <div className='d-flex justify-content-center gap-2 mt-3'>
                                        <Button
                                            loading={loading}
                                            size='large' type="primary" style={{width: '8%'}} htmlType="submit">
                                            Gửi
                                        </Button>

                                        <Link to='/login' className='btn btn-warning text-white'>Trở lại</Link>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


