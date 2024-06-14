import React, { useState } from 'react';
import {App, Button, Image, Pagination, Space, Table} from 'antd';
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
import defaultUser from '../../assets/img/defalt-user.png'
import useDeleteByIdApi from "../../hooks/use-delete-by-id-api.ts";

const ManageUser: React.FC = () => {

    const {modal, message} = App.useApp();

    const [currentPage, setCurrentPage] = useState<number>(1);

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

    const deleteByIdApi = useDeleteByIdApi(ResourceUrl.USER, "users")

    const handleDeleteEntityButton = (cccd: string) => {
        modal.confirm(
            {
                title: 'Xác nhận xóa',
                content: `Bạn chắc chắn muốn xóa người dùng có cccd là ${cccd}`,
                onOk: () => {
                    void message.open({
                        key: 'deletable',
                        type: 'loading',
                        content: 'Đang xóa đối tượng có cccd là ' + cccd + '...',
                        duration: 0
                    });
                    deleteByIdApi.mutate(cccd, {
                        onSuccess: () => {
                            message.destroy('deletable')
                        },
                        onError: () => message.destroy('deletable')
                    });
                },
                maskClosable: true,
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
                    style={{borderRadius: '50%', objectFit: 'cover'}}
                    width={40}
                    height={40}
                    src={record.anhdaidien ? record.anhdaidien :
                        defaultUser}
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
                        onClick={() => handleDeleteEntityButton(record.cccd)}
                    >
                        <MdOutlineDelete className='fs-5'/>
                    </Button>
                </Space>
            ),
        },
    ];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const {
        isLoading,
        data: listResponse = PageConfigs.initListResponse as ListResponse<UserResponse>
    } = useGetAllApi<UserResponse>
    (ResourceUrl.USER, "users", {page: currentPage})

    if (isLoading) return <div>Loading ...</div>

    return <div>
        <h1>Quản lý người dùng</h1>
        <div className='d-flex justify-content-end mb-3'>
            <Link to='/admin/them-moi-nguoi-dung' className='btn btn-primary'>Thêm mới người dùng</Link>
        </div>
        <Table rowKey="cccd" pagination={false} columns={columns}  dataSource={listResponse.content}/>
        <Pagination
                style={{ marginTop: '16px', textAlign: 'center' }}
                current={currentPage}
                total={listResponse.totalElements}
                pageSize={listResponse.pageSize | 3}
                onChange={handlePageChange}
            />
    </div>
}

export default ManageUser;