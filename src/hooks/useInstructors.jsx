import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data: instructors = [], refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/instructors');
            return res?.data;
        },
      })
      return [instructors, refetch, isLoading ]
};

export default useInstructors;