type FormModal<T> = {
    formType: "new" | "edit" | null | undefined,
    record?: T,
}

type DepartmentForm<T> = {editState?: string, setEditState?: (value?: React.SetStateAction<Z>) => void} & FormModal<T>

type NotificationFormType<T> = {editState?: string, setEditState?: (value?: React.SetStateAction<Z>) => void} & FormModal<T>

    

