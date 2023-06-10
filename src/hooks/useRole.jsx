import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token");
  const [render, setRender] = useState(!token ? true : false);
  useEffect(() => {
    if (user && token) {
      setRender(true);
    }
  }, [user, token]);
  const {
    data: role = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: render,
    queryFn: async () => {
      if (token) {
        const res = await axiosSecure.get(`/role/${user?.email}`);
        return res?.data;
      }
    },
  });
  return [role?.role, isLoading];
};

export default useRole;
