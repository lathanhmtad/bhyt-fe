import {useState} from "react";
import {Form, GetProp, UploadFile, UploadProps} from "antd";
import useGetByIdApi from "../../hooks/use-get-by-id-api";
import {UserRequest, UserResponse} from "../../models/User.ts";
import useUpdateApi from "../../hooks/use-update-api.ts";
import ResourceUrl from "../../constants/ResourceUrl.ts";
import useUploadSingleImageApi from "../../hooks/use-upload-single-image-api.ts";
import {UploadedImageResponse} from "../../models/Image.ts";
import moment from "moment/moment";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function useUserUpdateViewModel(cccd: string) {
    const [form] = Form.useForm();

    const [user, setUser] =
        useState<UserResponse>()

    const [loading, setLoading] =
        useState<boolean>(false)

    const [avatarFile, setAvatarFile] =
        useState<UploadFile[]>([])

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handleOpenPreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    useGetByIdApi<UserResponse>(
        ResourceUrl.USER,
        "users", cccd,
        async (userResponse) => {
            setUser(userResponse)

            if (userResponse.anhdaidien) {
                const fileList: UploadFile[] = [
                    {
                        uid: `-1`,
                        name: `image.png`,
                        status: 'done',
                        url: userResponse.anhdaidien,
                    }
                ]
                setAvatarFile(fileList)
                form.setFieldValue("imageFiles", fileList);
            }
        }
    );

    const updateApi =
        useUpdateApi<UserRequest, UserResponse>(ResourceUrl.USER,
            "users", cccd);

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
            updateApi.mutate(requestBody, {
                onSuccess: () =>
                    setLoading(false),
                onError: () => setLoading(false)
            })
        }

        const filesToUpload =
            avatarFile.filter(item => item.originFileObj)
                .map(item => item.originFileObj);

        if (filesToUpload.length > 0) {
            uploadSingleImageApi.mutate(filesToUpload[0] as File, {
                onSuccess: (uploadedImageResponse) => createUser(uploadedImageResponse),
                onError: () => setLoading(false)
            })
        } else {
            if (user?.anhdaidien) {
                createUser({imageUrl: user.anhdaidien})
            } else
                createUser()
        }

    }

    return {
        previewImage,
        previewOpen,
        setPreviewImage,
        setPreviewOpen,
        form,
        user,
        avatarFile,
        handleOpenPreview,
        loading,
        handleChangeAvatarFile,
        handleSubmit,
    }
}