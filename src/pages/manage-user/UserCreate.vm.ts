import {Form, GetProp, UploadFile, UploadProps} from "antd";
import {useState} from "react";
import {UserRequest, UserResponse} from "../../models/User.ts";
import useCreateApi from "../../hooks/use-create-api.ts";
import ResourceUrl from "../../constants/ResourceUrl.ts";
import moment from 'moment';
import {UploadedImageResponse} from "../../models/Image.ts";
import useUploadSingleImageApi from "../../hooks/use-upload-single-image-api.ts";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function useUserCreateViewModel() {
    const [form] = Form.useForm();

    const [loading, setLoading] =
        useState<boolean>(false)

    const [avatarFile, setAvatarFile] =
        useState<UploadFile[]>([])

    const [previewOpen, setPreviewOpen] =
        useState(false);
    const [previewImage, setPreviewImage] =
        useState('');

    const handleOpenPreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const createApi = useCreateApi<UserRequest, UserResponse>
    (ResourceUrl.USER)

    const uploadSingleImageApi =
        useUploadSingleImageApi(`${ResourceUrl.USER}/upload-image`)

    const handleChangeAvatarFile: UploadProps['onChange'] =
        ({fileList: newFileList}) => {

            setAvatarFile(newFileList);
            form.setFieldValue("imageFiles", newFileList);
        }


    const handleSubmit = (values: UserRequest) => {
        setLoading(true)
        const createUser = (uploadedImageResponse?: UploadedImageResponse) => {
            const requestBody: UserRequest = {
                ...values,
                ngaysinh: moment(values.ngaysinh).format('YYYY-MM-DD'),
                anhdaidien: uploadedImageResponse ? uploadedImageResponse.imageUrl : null
            }
            createApi.mutate(requestBody, {
                onSuccess: () =>
                    setLoading(false),
                onError: () => setLoading(false)
            })
        }

        if (avatarFile.length > 0) {
            uploadSingleImageApi.mutate(avatarFile[0].originFileObj as File, {
                onSuccess: (uploadedImageResponse) => createUser(uploadedImageResponse),
                onError: () => setLoading(false)
            })
        } else {
            createUser()
        }
    }

    return {
        previewImage,
        previewOpen,
        setPreviewImage,
        setPreviewOpen,
        form,
        handleChangeAvatarFile,
        avatarFile,
        handleOpenPreview,
        loading,
        handleSubmit
    }
}