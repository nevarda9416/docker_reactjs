import React from 'react';
import {useSelector} from 'react-redux';

const DisplayValue = () => {
    const value = useSelector((state: any) => state.calculator.value);
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default DisplayValue