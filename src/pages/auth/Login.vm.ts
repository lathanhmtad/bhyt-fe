import {Form} from "antd";
import {useState} from "react";
import {UserRequest, UserResponse} from "../../models/User.ts";
import ResourceUrl from "../../constants/ResourceUrl.ts";
import {useMutation} from "react-query";
import FetchUtils, {ErrorResponse} from "../../utils/FetchUtils.ts";
import {useNavigate} from "react-router-dom";
import NotifyUtils from "../../utils/NotifyUtils.ts";

export default function useLoginViewModel() {
    const navigate = useNavigate()

    const [form] = Form.useForm();

    const [loading, setLoading] =
        useState<boolean>(false)

    const loginApi = useMutation<UserResponse, ErrorResponse, UserRequest>(
        (requestBody) =>
            FetchUtils.post(`${ResourceUrl.USER}/login`, requestBody)
    );

    const handleSubmit = async (values: UserRequest) => {
        setLoading(true)
        try {
            const userResponse = await loginApi.mutateAsync(values);

            if(userResponse.chucvu.machucvu === 3) navigate('/admin/quan-ly-nguoi-dung')
            else navigate('/')

            NotifyUtils.simpleSuccess('Đăng nhập thành công');
        } catch (e) {
            NotifyUtils.simpleFailed('Đăng nhập thất bại');
        } finally {
            setLoading(false)
        }
    }

    return {
        form,
        loading,
        handleSubmit
    }
}