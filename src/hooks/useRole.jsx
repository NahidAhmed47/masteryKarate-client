import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const { data: role = {}, refetch } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading,
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/role/${user?.email}`);
        const data = res.json();
        return data;
    },
  })
  return [role?.role]
};

export default useRole;
