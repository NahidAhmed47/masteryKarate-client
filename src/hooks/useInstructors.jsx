import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useInstructors = () => {
    const { isLoading, data: instructors = [], refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await axios.get('https://mastery-karate-server.vercel.app/instructors');
            return res?.data;
        },
      })
      return [instructors, refetch, isLoading ]
};

export default useInstructors;