import React from 'react'
import {Descriptions, DescriptionsProps, Image} from 'antd';
import {UserResponse} from "../models/User.ts";

interface EntityDetailsTableProps {
    data: UserResponse
}

function UserDetailsTable({data} : EntityDetailsTableProps) {

    const entityDetails = (data: UserResponse): DescriptionsProps['items'] => [
        {
            key: 'cccd',
            label: 'CCCD',
            children: data.cccd,
            span: 24
        },
        {
            key: 'chucvu',
            label: 'Chức vụ',
            children: data.chucvu.tenchucvu,
            span: 24
        },
        {
            key: 'ngaytao',
            label: 'Ngày tao',
            children: data.ngaytao,
            span: 24
        },
        {
            key: 'sdt',
            label: 'Số điện thoại',
            children: data.sdt,
            span: 24
        },
        {
            key: 'diachi',
            label: 'Địa chỉ',
            children: data.diachi,
            span: 24
        },
        {
            key: 'email',
            label: 'Email',
            children: data.email,
            span: 24
        },
        {
            key: 'ngaysinh',
            label: 'Ngày sinh',
            children: data.ngaysinh,
            span: 24
        },
        {
            key: 'Giới tính',
            label: 'gioitinh',
            children: data.gioitinh,
            span: 24
        },
        {
            key: 'so_BHYT',
            label: 'Số bảo hiểm y tế',
            children: data.so_BHYT,
            span: 24
        },
        {
            key: 'anhdaidien',
            label: 'Ảnh đại diện',
            children: <Image
                width={100}
                src={data.anhdaidien} />,
            span: 24
        },

    ];

    return (
        <Descriptions bordered layout="horizontal" items={entityDetails(data)}/>
    )
}

export default UserDetailsTable