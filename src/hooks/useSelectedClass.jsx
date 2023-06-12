import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem('access-token')
    const { isLoading, data: student = {}, refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading && !!user?.email && !!token,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res?.data;
        },
      })
      const selectedClasses = student.selectedClasses || [];
      return [selectedClasses, refetch, isLoading ]
};

export default useSelectedClass;