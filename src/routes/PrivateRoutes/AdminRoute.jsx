import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';
import Swal from 'sweetalert2';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();
    if(loading || isLoading){
        // TODO: add loading
        return <progress className="progress w-56"></progress>
    }

    if (user && role === 'admin'){
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
         return <Navigate to="/" replace></Navigate>;
    }
};

export default AdminRoute;