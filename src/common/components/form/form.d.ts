import { Course, GetCourseQuery } from "../../../API"
import { LazyCourse } from "../../../models"

type FormModal<T> = {
    formType: "new" | "edit" | null | undefined,
    record?: T,
}

type NotificationFormType<T> = {editState?: string, setEditState?: (value?: React.SetStateAction<Z>) => void} & FormModal<T>



type EventFormType<T> = {course: LazyCourse | undefined} & FormModal<T>
    

