import React, { useState } from 'react';
import {  Form, Input, Modal, Space, Table } from 'antd';
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import Search from "antd/es/input/Search";

const KhaiBaoManage: React.FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const columns = [
        {
            title: 'Mã khai báo',
            dataIndex: 'maKhaiBao',
            key: 'maKhaiBao',
        },
        {
            title: 'CCCD',
            dataIndex: 'cccd',
            key: 'cccd',
        },
        {
            title: 'Triệu chứng',
            dataIndex: 'trieuChung',
            key: 'trieuChung',
        },
        {
            title: 'Thời gian khai báo',
            dataIndex: 'thoiGianKhaiBao',
            key: 'thoiGianKhaiBao',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Link
                        to='/'
                        className='d-flex align-items-center justify-content-center btn btn-primary'>
                        <FaRegEdit className='fs-5' />
                    </Link>
                </Space>
            ),
        },
    ];

    const dataSource = [
        {
            maKhaiBao: 'KB001',
            cccd: '012345678901',
            trieuChung: 'Sốt, Ho',
            thoiGianKhaiBao: '2024-06-01 08:00',
        },
        {
            maKhaiBao: 'KB002',
            cccd: '098765432109',
            trieuChung: 'Đau họng',
            thoiGianKhaiBao: '2024-05-20 14:00',
        },
        {
            maKhaiBao: 'KB003',
            cccd: '112233445566',
            trieuChung: 'Mệt mỏi',
            thoiGianKhaiBao: '2024-05-15 09:30',
        },
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <h1>Quản lý khai báo</h1>
            <div className='d-flex justify-content-end align-items-center mb-3 gap-3'>
                <Search size='large' style={{ width: '300px' }} />
                <Link to='/admin/xuat-danh-sach-khai-bao' className='btn btn-success'>Xuất danh sách</Link>
                <Link to='/admin/tao-moi-khai-bao' className='btn btn-primary'>Thêm mới khai báo</Link>
            </div>
            <Table rowKey="maKhaiBao" columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default KhaiBaoManage;
