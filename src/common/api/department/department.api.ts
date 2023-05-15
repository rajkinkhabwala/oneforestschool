import { DataStore } from "aws-amplify";

import { CreateDepartmentInput, UpdateDepartmentInput } from "../../../API";
import {  Department} from "../../../models";
import { json } from "react-router-dom";


export async function createDepartment(department: CreateDepartmentInput) {
    
    try {
        const newDepartment = await DataStore.save(
            new Department(department)
        )
        return newDepartment
    } catch (error) {
        console.log("Error While Creating Department: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Creating Department."
        })
    }
}

export async function updateDepartment(department: UpdateDepartmentInput) {
    
    try {
        const original = await DataStore.query(Department, department.id)
        if(original){
            return DataStore.save(
                Department.copyOf(original, (updated) => {
                    updated.name = department.name!
                    updated.code = department.code!
                    updated.description = department.description!
                })
            )
        }
    } catch (error) {
        console.log("Error While Updating Department: ",error)

        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Updating Department."
        })
        
    }
}

export async function deleteDepartment(id: string) {
    try {
        const department = await DataStore.query(Department, id)

        if(department){
            return DataStore.delete(department)
        }else {
            throw json({
                message: "Data not found"
            }, {
                status: 404,
                statusText: "Error While Deleting Department."
            })
        }

    } catch (error) {
        console.log("Error While Deleting Department: ",error)

        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Deleting Department."
        })
    }
    
}

export async function listDepartment()
{

    try {
        const department = DataStore.query(Department)
        return department
    } catch (error) {
        console.log("Error While Listing Department: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Listing Department."
        })
    }
}

export async function getDepartment(id: string) {
    try {
        const department = DataStore.query(Department, id)
        return department
    } catch (error) {
        console.log("Error While Getting Single Department: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Getting Single Department."
        })
    }
}
