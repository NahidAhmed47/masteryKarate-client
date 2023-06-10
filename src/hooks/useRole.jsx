import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [render , setRender] = useState(false);
  useEffect(()=>{
    if(user){
      setRender(true)
    }
  },[user])
  const { data: role = {}, refetch, isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: render,
    queryFn: async()=>{
        const res = await axiosSecure.get(`/role/${user?.email}`)
        return res?.data;
    },
  })
  return [role?.role, isLoading]
};

export default useRole;
