import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const { isLoading, isError, data: classes = [], error, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/classes');
            const data = res.json();
            return data;
        },
      })
      return [classes, refetch, isLoading ]
};
export default useClasses;