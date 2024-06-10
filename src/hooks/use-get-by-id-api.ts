import { useQuery } from 'react-query';
import FetchUtils, { ErrorResponse } from '../utils/FetchUtils';
import NotifyUtils from '../utils/NotifyUtils';
import { UseQueryOptions } from 'react-query/types/react/types';

function useGetByIdApi<O>(
    resourceUrl: string,
    resourceKey: string,
    entityId: number | string,
    successCallback?: (data: O) => void,
    options?: UseQueryOptions<O, ErrorResponse>
) {
    return useQuery<O, ErrorResponse>(
        [resourceKey, 'getById', entityId],
        () => FetchUtils.getById<O>(resourceUrl, entityId),
        {
            onSuccess: successCallback,
            onError: () => NotifyUtils.simpleFailed('Lấy dữ liệu không thành công'),
            ...options,
        }
    );
}

export default useGetByIdApi;
