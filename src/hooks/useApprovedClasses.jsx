import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useApprovedClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: approvedClasses = [], refetch } = useQuery({
        queryKey: ['approvedClasses'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/allclass/approved');
            return res?.data;
        },
      })
      return [approvedClasses, refetch, isLoading ]
};

export default useApprovedClasses;