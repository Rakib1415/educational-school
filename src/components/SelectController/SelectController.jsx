import React, {useState} from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap'
import './SelectController.css'

const SelectController = ({select, selectChange}) => {
    
    return (
           <FormGroup>
               <Input onChange={(e) => selectChange(e.target.value)} className="select" type="select" name="select" value={select} id="select">
                   <option>Please select option</option>
                   {/* <option>Sort by popularity</option> */}
                   <option value="Sort by price (Low to High)">Sort by price (Low to High)</option>
                   <option>Sort by price (High to Low)</option>
                   {/* <option>Sort by latest</option> */}
               </Input>

           </FormGroup>
    );
};

export default SelectController;