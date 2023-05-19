import { DataStore } from "aws-amplify";
import { CreateCourseInput, UpdateCourseInput } from "../../../API";
import { Course } from "../../../models";
import { json } from "react-router-dom";

export async function getCourse(id: string) {
    try {
        const course = DataStore.query(Course, id)
        return course
    } catch (error) {
        console.log("Error While Getting Single Course: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Getting Single Course."
        })
    }
}


export async function createCourse(course: CreateCourseInput) {
    
    try {
        const newCourse = await DataStore.save(
            new Course(course)
        )
        return newCourse
    } catch (error) {
        console.log("Error While Creating Course: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Creating Course."
        })
    }
}

export async function listCourse()
{

    try {
        const course = DataStore.query(Course)
        return course
    } catch (error) {
        console.log("Error While Listing Course: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Listing Course."
        })
    }
}

export async function updateCourse(course: UpdateCourseInput) {
    
    try {
        const original = await DataStore.query(Course, course.id)
        if(original){
            return DataStore.save(
                Course.copyOf(original, (updated) => {
                    updated.name = course.name!
                    updated.code = course.code!
                    updated.description = course.description!
                    updated.credit = course.credit!
                    updated.departmentID = course.departmentID!
                    updated.visibility = course.visibility!
                    updated.start_date = course.start_date!
                    updated.end_date = course.end_date!
                    updated.main_image = course.main_image!
                    updated.images = course.images
                })
            )
        }
    } catch (error) {
        console.log("Error While Updating Course: ",error)

        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Updating Course."
        })
        
    }
}

export async function deleteCourse(id: string) {
    try {
        const course = await DataStore.query(Course, id)

        if(course){
            return DataStore.delete(course)
        }else {
            throw json({
                message: "Data not found"
            }, {
                status: 404,
                statusText: "Error While Deleting Course."
            })
        }

    } catch (error) {
        console.log("Error While Deleting Course: ",error)

        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Deleting Course."
        })
    }
    
}