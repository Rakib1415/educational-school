import React from 'react';
import SelectController from '../SelectController/SelectController';
import ViewController from '../ViewController/ViewController';

const Controllers = ({changeView, select, selectChange}) => {
    return (
        <div className="row mb-0">
            <div className="col-2">
            <ViewController changeView={changeView}/>
            </div>
            <div className="col-6">
                <SelectController
                select={select}
                selectChange={selectChange}
                />
            </div>
        </div>
    );
};

export default Controllers;