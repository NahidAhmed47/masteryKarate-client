import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useApprovedClasses = () => {
    const { isLoading, data: approvedClasses = [], refetch } = useQuery({
        queryKey: ['approvedClasses'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/allclass/approved`);
            const data = res.json();
            return data;
        },
      })
      return [approvedClasses, refetch, isLoading ]
};

export default useApprovedClasses;