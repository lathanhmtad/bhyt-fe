import React from 'react';
import {Space, Table} from 'antd';
import {Link} from "react-router-dom";
import {FaRegEdit} from "react-icons/fa";
import Search from "antd/es/input/Search";

const ManageNotification: React.FC = () => {

    const columns = [
        {
            title: 'Mã thông báo',
            dataIndex: 'maThongBao',
            key: 'maThongBao',
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'tieuDe',
            key: 'tieuDe',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'ngayTao',
            key: 'ngayTao',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangThai',
            key: 'trangThai',
        },
        {
            title: 'Người tạo',
            dataIndex: 'nguoiTao',
            key: 'nguoiTao',
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
            maThongBao: 'N001',
            tieuDe: 'Thông báo cuộc họp',
            ngayTao: '2024-06-01',
            trangThai: 'Đã gửi',
            nguoiTao: 'Admin1',
        },
        {
            maThongBao: 'N002',
            tieuDe: 'Lịch nghỉ lễ',
            ngayTao: '2024-05-20',
            trangThai: 'Đã gửi',
            nguoiTao: 'Admin2',
        },
        {
            maThongBao: 'N003',
            tieuDe: 'Cập nhật chính sách',
            ngayTao: '2024-05-15',
            trangThai: 'Chưa gửi',
            nguoiTao: 'Admin3',
        },
    ];

    return (
        <div>
            <h1>Quản lý thông báo</h1>
            <div className='d-flex justify-content-end align-items-center mb-3 gap-3'>
                <Search size='large' style={{width: '300px'}}/>
                <Link to='/admin/xuat-danh-sach-thong-bao' className='btn btn-success'>Xuất danh sách</Link>
                <Link to='/admin/them-moi-thong-bao' className='btn btn-primary'>Thêm mới thông báo</Link>
            </div>
            <Table rowKey="maThongBao" columns={columns} dataSource={dataSource}/>
        </div>
    );
}

export default ManageNotification;
