import { Course, GetCourseQuery } from "../../../API"

type FormModal<T> = {
    formType: "new" | "edit" | null | undefined,
    record?: T,
}

type NotificationFormType<T> = {editState?: string, setEditState?: (value?: React.SetStateAction<Z>) => void} & FormModal<T>

type DepartmentFormType<T> = {editState?: string, setEditState?: (value?: React.SetStateAction<Z>) => void} & FormModal<T>

type EventFormType<T> = {course: GetCourseQuery | undefined} & FormModal<T>
    

