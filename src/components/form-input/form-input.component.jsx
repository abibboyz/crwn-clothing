import React from "react";
import './form-input.style.scss'

const FormInput =({handleChange, label, ...otherProps}) =>(
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...otherProps} />
        {label?(
            <label 
                className={`${otherProps.value.length ? 'shrinkLabel' : ''} form-input-label`}
                >
            </label>
            ) : null
        }
    </div>
);

export default FormInput;