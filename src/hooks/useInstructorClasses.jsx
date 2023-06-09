import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useInstructorClasses = () => {
    const {user, loading} = useAuth()
    const { isLoading, data: instructorClasses = [], refetch } = useQuery({
        queryKey: ['instructorClasses', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/classes/${user?.email}`);
            const data = res.json();
            return data;
        },
      })
      return [instructorClasses, refetch, isLoading ]
};

export default useInstructorClasses;