import React from 'react';
import { View } from 'react-native';
import { FormProvider } from './context/Form';
import { Input } from './Input'; // This is the new Input component

const Form = ({ fields, onSubmit, theme = 'light' }: any) => {
    return (
        <FormProvider onSubmit={onSubmit} theme={theme}>
            <View>
                {fields.map(({ field }: any, index: number) => (
                    <View style={{ paddingTop: 8 }} key={index}>
                        <Input field={field} />
                    </View>
                ))}
            </View>
        </FormProvider>
    );
};

export { Form };
