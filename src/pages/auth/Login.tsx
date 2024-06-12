import logoYte from '../../assets/img/logoYte.png'
import {Button, Form, FormProps, Input} from "antd";
import {UserRequest} from "../../models/User.ts";
import useLoginViewModel from "./Login.vm.ts";

export default function Login() {

    const {
        form,
        loading,
        handleSubmit
    } = useLoginViewModel()

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
                            <h2 className="title">Đăng Nhập</h2>
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
                                    label="Email"
                                    name="email"
                                    rules={[{required: true, message: 'Vui lòng nhập email!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item<UserRequest>
                                    label="Mật khẩu"
                                    name="matkhau"
                                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu!'}]}
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item>
                                    <div className='d-flex justify-content-center gap-2 mt-3'>
                                        <Button
                                            loading={loading}
                                            size='large' type="primary" style={{width: '8%'}} htmlType="submit">
                                            Gửi
                                        </Button>

                                        <button className='btn btn-warning text-white'>Trở lại</button>
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


