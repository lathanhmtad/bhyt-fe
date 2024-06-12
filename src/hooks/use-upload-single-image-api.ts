import {useMutation} from 'react-query';
import FetchUtils, {ErrorResponse} from '../utils/FetchUtils';
import NotifyUtils from "../utils/NotifyUtils.ts";
import {UploadedImageResponse} from "../models/Image.ts";

function useUploadSingleImageApi(resourceUrl: string) {
    return useMutation<UploadedImageResponse, ErrorResponse, File>(
        (image) => FetchUtils.uploadSingleImage(resourceUrl, image),
        {
            onSuccess: () => NotifyUtils.simpleSuccess('Tải hình ảnh lên thành công'),
            onError: () => NotifyUtils.simpleFailed('Tải hình ảnh lên không thành công')
        }
    );
}

export default useUploadSingleImageApi;