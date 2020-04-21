import React, {useEffect} from 'react'
import errors from '../helpers/errorsDictionary'

const Alert  = ({error}) => {
    return (
        <div className="container" style={{textAlign: 'center', opacity: '0.8',maxWidth: '200px', height: '50px',background: 'red'}}>
            <strong>
                {errors[error]}
            </strong>
        </div>
    );
}

export default Alert;