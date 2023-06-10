import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: role = {}, refetch } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading,
    queryFn: async()=>{
        const res = await axiosSecure.get(`/role/${user?.email}`)
        return res?.data;
    },
  })
  return [role?.role]
};

export default useRole;
