import React from 'react';
import { Space, Table } from 'antd';
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import Search from "antd/es/input/Search";

const QuanLyBenhDich: React.FC = () => {

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
                        <FaRegEdit className='fs-5' />
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

    return (
        <div>
            <h1>Quản lý bệnh dịch</h1>
            <div className='d-flex justify-content-end align-items-center mb-3 gap-3'>
                <Search size='large' style={{width: '300px'}}/>
                <Link to='/admin/them-moi-benh-dich' className='btn btn-success'>Xuất danh sách</Link>
                <Link to='/admin/them-moi-benh-dich' className='btn btn-primary'>Thêm mới bệnh dịch</Link>
            </div>
            <Table rowKey="maBenh" columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default QuanLyBenhDich;
