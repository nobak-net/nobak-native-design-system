import React from 'react';
import { TextInput } from './components/TextInput'; // Import or create these components
import { TextAreaInput } from './components/TextAreaInput';
import { SelectInput } from './components/SelectInput';

const Input = ({ field }: any) => {
    const { type, id, label, placeholder, options } = field;

    const config = {
        id,
        label,
        placeholder,
       };
    
    switch (type) {
        case 'text':
            return <TextInput config={{ ...config, type }} />;
        // case 'password':
        //     return <TextInput id={id} label={label} placeholder={placeholder} />;
        // case 'textarea':
        //     return <TextAreaInput id={id} label={label} placeholder={placeholder} />;
        // case 'select':
        //     return <SelectInput id={id} label={label} options={options} />;
        default:
            return null;
    }
};

export { Input };