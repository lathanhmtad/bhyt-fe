import {Form} from "antd";
import {useState} from "react";
import {UserRequest, UserResponse} from "../../models/User.ts";
import useCreateApi from "../../hooks/use-create-api.ts";
import ResourceUrl from "../../constants/ResourceUrl.ts";

export default function useSignUpViewModel() {
    const [form] = Form.useForm();

    const [loading, setLoading] =
        useState<boolean>(false)

    const createApi = useCreateApi<UserRequest, UserResponse>
    (ResourceUrl.USER)

    const handleSubmit = (values: UserRequest) => {
        setLoading(true)
        const createUser = () => {
            createApi.mutate({
                ...values,
                machucvu: 1
            }, {
                onSuccess: () =>
                    setLoading(false),
                onError: () => setLoading(false)
            })
        }
        createUser()
    }

    return {
        form,
        loading,
        handleSubmit
    }
}