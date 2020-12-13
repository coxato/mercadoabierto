import React, { useState, useEffect } from 'react';
import { useUser } from '../../store/user';

const UserPage = () => {
    
    // OJO esto solo para yo mismo, borrar de inmediato ya que la información del usuario
    // se debe obtener por peticiones http
    const { getUserInfo } = useUser()

    const [name, setName] = useState('fulanito')

    useEffect(() => {
        const { first_name } = getUserInfo();
        setName(first_name);
    }, []);

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}
 
export default UserPage;