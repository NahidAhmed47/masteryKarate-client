import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useApprovedClasses = () => {
    const { isLoading, data: approvedClasses = [], refetch } = useQuery({
        queryKey: ['approvedClasses'],
        queryFn: async()=>{
            const res = await axios.get('https://mastery-karate-server.vercel.app/allclass/approved');
            return res?.data;
        },
      })
      return [approvedClasses, refetch, isLoading ]
};

export default useApprovedClasses;