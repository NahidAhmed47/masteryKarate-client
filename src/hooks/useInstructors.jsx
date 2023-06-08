import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {
    const { isLoading, isError, data: instructors = [], error, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/instructors');
            const data = res.json();
            return data;
        },
      })
      return [instructors, refetch, isLoading ]
};

export default useInstructors;