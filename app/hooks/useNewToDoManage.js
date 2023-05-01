import React from "react";
import { useNavigation } from '@react-navigation/native';
import useAsyncStorageCRUD from "./useAsyncStorageCRUD";


export default function useNewToDoManage() {
    const navigation = useNavigation();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const { toDoCreate } = useAsyncStorageCRUD();

    const fieldsTab = [
        {
            value: title,
            onChange: (e) => setTitle(e),
            placeholder: 'Nom de la tâche'
        },
        {
            value: description,
            onChange: (e) => setDescription(e),
            placeholder: 'Description (facultative)'
        },
    ]

    async function handleSubmit() {
        if (title.length === 0) {
            return alert('La tâche doit avoir un nom')
        }
        await toDoCreate({ title, description, checked: false });
        setTitle('');
        setDescription('');
        navigation.navigate('Home');
    }

    return { fieldsTab, handleSubmit };
}