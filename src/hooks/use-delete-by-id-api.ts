import {useMutation, useQueryClient} from 'react-query';
import FetchUtils, {ErrorResponse} from '../utils/FetchUtils';
import NotifyUtils from "../utils/NotifyUtils.ts";

function useDeleteByIdApi<T = number | string>(resourceUrl: string, resourceKey: string) {
    const queryClient = useQueryClient();

    return useMutation<void, ErrorResponse, T>(
        (entityId) => FetchUtils.deleteById(resourceUrl, entityId),
        {
            onSuccess: () => {
                NotifyUtils.simpleSuccess('Xóa thành công')
                void queryClient.invalidateQueries([resourceKey, 'getAll']);
            },
            onError: () => NotifyUtils.simpleFailed('Xóa không thành công')
        }
    );
}

export default useDeleteByIdApi;