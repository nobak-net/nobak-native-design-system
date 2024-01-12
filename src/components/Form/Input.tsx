import React from 'react';
import { TextInput } from '../Input/components/TextInput'; // Import or create these components
import { TextAreaInput } from '../Input/components/TextAreaInput';
import { SelectInput } from '../Input/components/SelectInput';
import { useForm } from './context/Form';

const Input = ({ field }: any) => {
    const { type, id, label, placeholder, options } = field;
    const { formState, setFieldValue } = useForm();
    const value = formState[id] || '';

    const handleChange = (text: any) => {
        setFieldValue(id, text);
    };
    const config = {
        id,
        label,
        placeholder,
        handleChange
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