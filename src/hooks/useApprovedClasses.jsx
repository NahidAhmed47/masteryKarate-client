import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useApprovedClasses = () => {
    const { isLoading, data: approvedClasses = [], refetch } = useQuery({
        queryKey: ['approvedClasses'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:5000/allclass/approved');
            return res?.data;
        },
      })
      return [approvedClasses, refetch, isLoading ]
};

export default useApprovedClasses;