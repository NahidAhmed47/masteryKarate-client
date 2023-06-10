import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const StudentRoute = () => {
    const { user, loading } = useAuth();
    const [role] = useRole();
    const location = useLocation();
    if(loading){
        // TODO: add loading
        return <progress className="progress w-56"></progress>
    }

    else if (user && role === 'student'){
        return children;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Unauthorized Access',
            showConfirmButton: false,
            timer: 1500
          })
         return <Navigate to="/" state={{from: location}} replace></Navigate>;
    }
};

export default StudentRoute;