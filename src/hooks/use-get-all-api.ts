import {useQuery} from 'react-query';
import FetchUtils, {ErrorResponse, ListResponse} from "../utils/FetchUtils.ts";
import NotifyUtils from "../utils/NotifyUtils.ts";

export interface RequestParams {
    page?: number;
    size?: number;
    sort?: string;
    filter?: string;
    search?: string;
    all?: boolean;
}

function useGetAllApi<O>(
    resourceUrl: string,
    resourceKey: string,
    requestParams?: RequestParams,
    successCallback?: (data: ListResponse<O>) => void,
    options?: UseQueryOptions<ListResponse<O>, ErrorMessage>
) {

    const queryKey = [resourceKey, 'getAll', requestParams];

    return useQuery<ListResponse<O>, ErrorResponse>(
        queryKey,
        () => FetchUtils.getAll<O>(resourceUrl, requestParams),
        {
            keepPreviousData: true,
            onSuccess: successCallback,
            onError: (error) => NotifyUtils.simpleFailed(`Lỗi ${error.statusCode || 'chưa biết'}: Lấy dữ liệu không thành công`),
            ...options,
        }
    );
}

export default useGetAllApi;