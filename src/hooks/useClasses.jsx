import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const { isLoading, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/allclass/all`);
            const data = res.json();
            return data;
        },
      })
      return [classes, refetch, isLoading ]
};
export default useClasses;