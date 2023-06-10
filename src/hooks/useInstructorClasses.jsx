import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructorClasses = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: instructorClasses = [], refetch } = useQuery({
        queryKey: ['instructorClasses', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/classes/${user?.email}`);
            return res?.data;
        },
      })
      return [instructorClasses, refetch, isLoading ]
};

export default useInstructorClasses;