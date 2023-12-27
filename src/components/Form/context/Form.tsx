import React, { useState, useCallback, createContext, useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button } from '../../Button'
export type FormContextType = {
    formState: { [key: string]: any };
    setFieldValue: (field: string, value: any) => void;
    handleSubmit: () => void;
};

export const FormContext = createContext<FormContextType>({
    formState: {},
    setFieldValue: () => { },
    handleSubmit: () => { },
});

export const useForm = (): FormContextType => {
    return useContext(FormContext);
};

export const FormProvider: React.FC<{
    children: React.ReactNode;
    onSubmit: (formState: { [key: string]: any }) => void;
}> = ({ children, onSubmit }) => {
    const [formState, setFormState] = useState<{ [key: string]: any }>({});

    const setFieldValue = useCallback((field: string, value: any) => {
        setFormState((currentFormState) => ({
            ...currentFormState,
            [field]: value,
        }));
    }, []);

    const handleSubmit = useCallback(() => {
        onSubmit(formState);
    }, [formState, onSubmit]);

    return (
        <FormContext.Provider value={{ formState, setFieldValue, handleSubmit }}>
            <View>
                {children}
                <View style={{ paddingTop: 12}}>
                    <Button text="Submit" onPress={handleSubmit} buttonStyle={{ variant: 'primary', size: 'medium', full: false }} />
                </View>
            </View>
        </FormContext.Provider>
    );
};