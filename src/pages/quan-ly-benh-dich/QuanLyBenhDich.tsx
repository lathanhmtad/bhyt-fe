import React, {useState} from 'react';
import {Form, Input, Modal, Select, Space, Table} from 'antd';
import {Link} from "react-router-dom";
import {FaRegEdit} from "react-icons/fa";
import Search from "antd/es/input/Search";

const QuanLyBenhDich: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const columns = [
        {
            title: 'Mã bệnh',
            dataIndex: 'maBenh',
            key: 'maBenh',
        },
        {
            title: 'Tên bệnh',
            dataIndex: 'tenBenh',
            key: 'tenBenh',
        },
        {
            title: 'Triệu chứng',
            dataIndex: 'trieuChung',
            key: 'trieuChung',
        },
        {
            title: 'Loại bệnh',
            dataIndex: 'loaiBenh',
            key: 'loaiBenh',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangThai',
            key: 'trangThai',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Link
                        to='/'
                        className='d-flex align-items-center justify-content-center btn btn-primary'>
                        <FaRegEdit className='fs-5'/>
                    </Link>
                </Space>
            ),
        },
    ];

    const dataSource = [
        {
            maBenh: 'B001',
            tenBenh: 'Cảm cúm',
            trieuChung: 'Ho, sốt, đau đầu',
            loaiBenh: 'Virus',
            trangThai: 'Đang lưu hành',
        },
        {
            maBenh: 'B002',
            tenBenh: 'Sốt xuất huyết',
            trieuChung: 'Sốt cao, phát ban, chảy máu',
            loaiBenh: 'Virus',
            trangThai: 'Đang lưu hành',
        },
        {
            maBenh: 'B003',
            tenBenh: 'Tiêu chảy',
            trieuChung: 'Tiêu chảy, mất nước, mệt mỏi',
            loaiBenh: 'Vi khuẩn',
            trangThai: 'Đang lưu hành',
        },
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // form.validateFields().then(values => {
        //     console.log('Form values: ', values);
        //     // Here you can handle the form submission, e.g., send data to the server
        //     setIsModalVisible(false);
        //     form.resetFields();
        // }).catch(info => {
        //     console.log('Validate Failed:', info);
        // });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <h1>Quản lý bệnh dịch</h1>
            <div className='d-flex justify-content-end align-items-center mb-3 gap-3'>
                <Search size='large' style={{width: '300px'}}/>
                <Link to='/admin/them-moi-benh-dich' className='btn btn-success'>Xuất danh sách</Link>
                <button onClick={showModal} className='btn btn-primary'>Thêm mới bệnh dịch</button>
            </div>
            <Table rowKey="maBenh" columns={columns} dataSource={dataSource}/>

            <Modal
                title="Thêm mới bệnh dịch"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    // form={form}
                    layout="vertical"
                    size='large'
                >
                    <Form.Item
                        name="tenBenh"
                        label="Tên bệnh"
                        rules={[{required: true, message: 'Vui lòng nhập tên bệnh'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="loaiBenh"
                        label="Loại bệnh"
                        rules={[{required: true, message: 'Vui lòng chọn loại bệnh'}]}
                    >
                        <Select>
                            <Select.Option value="Virus">Virus</Select.Option>
                            <Select.Option value="Vi khuẩn">Vi khuẩn</Select.Option>
                            <Select.Option value="Nấm">Nấm</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="trangThai"
                        label="Trạng thái"
                        rules={[{required: true, message: 'Vui lòng chọn trạng thái'}]}
                    >
                        <Select>
                            <Select.Option value="Đang lưu hành">Đang lưu hành</Select.Option>
                            <Select.Option value="Đã kiểm soát">Đã kiểm soát</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="trieuChung"
                        label="Mô tả triệu chứng"
                        rules={[{required: true, message: 'Vui lòng nhập mô tả triệu chứng'}]}
                    >
                        <Input.TextArea rows={4}/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default QuanLyBenhDich;
