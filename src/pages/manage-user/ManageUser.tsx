import React from 'react';
import {App, Button, Image, Space, Table} from 'antd';
import type {TableProps} from 'antd';
import {UserResponse} from "../../models/User.ts";
import {Link} from "react-router-dom";
import {FaRegEdit} from "react-icons/fa";
import {MdOutlineDelete} from "react-icons/md";
import {BiDetail} from "react-icons/bi";
import useGetAllApi from "../../hooks/use-get-all-api.ts";
import ResourceUrl from "../../constants/ResourceUrl.ts";
import PageConfigs from "../PageConfigs.ts";
import './ManageUser.css'
import UserDetailsTable from "../../components/UserDetailsTable.tsx";
import {ListResponse} from "../../utils/FetchUtils.ts";
import moment from 'moment';

const ManageUser: React.FC = () => {

    const {modal} = App.useApp();

    const handleViewEntityButton = (record: UserResponse) => {
        modal.info(
            {
                title: 'Thông tin',
                content: (
                    <UserDetailsTable
                        data={record}/>
                ),
                maskClosable: true,
                width: '50%'
            }
        );

    }

    const columns: TableProps<UserResponse>['columns'] = [
        {
            title: 'Họ và tên',
            dataIndex: 'hovaten',
            key: 'hovaten',
            render: (_, record) => <div className='d-flex align-items-center gap-3'>
                <Image
                    style={{borderRadius: '50%'}}
                    width={40}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <span>{record.hovaten}</span>
            </div>
        },
        {
            title: 'CCCD',
            dataIndex: 'cccd',
            key: 'cccd',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'ngaytao',
            key: 'ngaytao',
            render: (text) => `${moment(text).format('DD-MM-YYYY HH:mm:ss')}`
        },
        {
            title: 'Chức vụ',
            dataIndex: 'chucvu',
            key: 'chucvu',
            render: (_, record) => record.chucvu.tenchucvu
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type='text'
                        className='d-flex align-items-center justify-content-center bg-warning'
                        onClick={() => handleViewEntityButton(record)}
                    >
                        <BiDetail className='fs-5 text-white'/>
                    </Button>
                    <Link
                        to={`/admin/cap-nhap-nguoi-dung/${record.cccd}`}
                        className='d-flex align-items-center justify-content-center btn btn-primary'>
                        <FaRegEdit className='fs-5'/>
                    </Link>
                    <Button
                        className='d-flex align-items-center justify-content-center'
                        danger
                        type='primary'
                        //onClick={() => handleDeleteEntityButton(record.id)}
                    >
                        <MdOutlineDelete className='fs-5'/>
                    </Button>
                </Space>
            ),
        },
    ];

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<UserResponse>
    } = useGetAllApi<UserResponse>
    (ResourceUrl.USER, "users", {page: 1})

    if (isLoading) return <div>Loading ...</div>

    return <div>
        <div className='d-flex justify-content-end mb-3'>
            <Link to='/admin/them-moi-nguoi-dung' className='btn btn-primary'>Thêm mới người dùng</Link>
        </div>
        <Table rowKey="cccd" columns={columns} dataSource={listResponse.content}/>
    </div>
}

export default ManageUser;