import { DataStore } from "aws-amplify";
import { CreateUserInput, UpdateUserInput} from '../../../API'
import { User } from "../../../models";
import { json } from "react-router-dom";

export async function getUser(id: string) {
    try {
        const user = DataStore.query(User, id)
        return user
    } catch (error) {
        console.log("Error While Getting Single User: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Getting Single User."
        })
    }
}


export async function createUser(user: CreateUserInput) {
    
    try {
        const newUser = await DataStore.save(
            new User(user)
        )
        return newUser
    } catch (error) {
        console.log("Error While Creating User: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Creating User."
        })
    }
}

export async function listUser()
{

    try {
        const user = DataStore.query(User)
        return user
    } catch (error) {
        console.log("Error While Listing User: ",error)
        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Listing User."
        })
    }
}

export async function updateUser(user: UpdateUserInput) {
    
    try {
        const original = await DataStore.query(User, user.id)
        if(original){
            return DataStore.save(
                User.copyOf(original, (updated) => {
                    updated.name = user.name!
                    updated.email = user.email!
                    updated.description = user.description!
                    updated.phone = user.phone!
                    updated.address = user.address!
                    updated.picture = user.picture!
                })
            )
        }
    } catch (error) {
        console.log("Error While Updating User: ",error)

        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Updating User."
        })
        
    }
}

export async function deleteUser(id: string) {
    try {
        const user = await DataStore.query(User, id)

        if(user){
            return DataStore.delete(user)
        }else {
            throw json({
                message: "Data not found"
            }, {
                status: 404,
                statusText: "Error While Deleting User."
            })
        }

    } catch (error) {
        console.log("Error While Deleting User: ",error)

        throw json({
            message: error
        }, {
            status: 500,
            statusText: "Error While Deleting User."
        })
    }
    
}


// export async function getUser(user: string) {
//     return await API.graphql<GraphQLQuery<GetUserQuery>>(graphqlOperation(queries.getUser, { id: user }))
// }