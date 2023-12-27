import React from 'react';
import { View } from 'react-native';
import { FormProvider } from './context/Form';
import { Input } from './Input'; // This is the new Input component

const Form = ({ fields, onSubmit }: any) => {
    return (
        <FormProvider onSubmit={onSubmit}>
            <View>
                {fields.map(({ field }, index) => (
                    <Input key={index} field={field} />
                ))}
            </View>
        </FormProvider>
    );
};

export { Form };
