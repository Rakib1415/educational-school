import React from 'react';
import './FormInput.css'

const FormInput = ({handleChange, error, label, ...otherProps }) => {
    
    return (
        <div className="group">
            <input className="form-input is-invalid" onChange={handleChange} {...otherProps}/>
            {
                label ?
                    (<label className={`${otherProps.value && otherProps.value.length ? 'shrink': ''} form-input-label`}>
                        {label}
                    </label>)
                    :null
            }
      
           {
               error && <div className="text-danger">{error}</div>
           }
            
        </div>
    );
};

export default FormInput;