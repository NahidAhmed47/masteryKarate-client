import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {
    const {user, loading} = useAuth()
    const { isLoading, data: student = {}, refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            const data = res.json();
            return data;
        },
      })
      const selectedClasses = student.selectedClasses;
      return [selectedClasses, refetch, isLoading ]
};

export default useSelectedClass;