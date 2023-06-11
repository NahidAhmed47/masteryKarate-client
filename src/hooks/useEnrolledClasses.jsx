import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    isLoading,
    data: enrolledClassId = [],
    refetch,
  } = useQuery({
    queryKey: ["enrolledClassId"],
    enabled: !loading && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled/${user?.email}`);
      return res.data
    },
  });
  return [enrolledClassId, refetch, isLoading];
};

export default useEnrolledClasses;
