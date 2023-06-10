import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await axiosSecure.get('allclass/all');
            return res?.data;
        },
      })
      return [classes, refetch, isLoading ]
};
export default useClasses;