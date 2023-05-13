import { API, Auth } from "aws-amplify";

export async function addUserToGroup(username: string, groupName: string){
    let apiName = 'AdminQueries';
    let path = '/addUserToGroup';
    let myInit = {
        body: {
            "username" : username,
            "groupname" : groupName
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function removeUserFromGroup(username: string, groupName: string){
    let apiName = 'AdminQueries';
    let path = '/removeUserFromGroup';
    let myInit = {
        body: {
            "username" : username,
            "groupname" : groupName
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }
    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function confirmUserSignUp(username: string){
    let apiName = 'AdminQueries';
    let path = '/confirmUserSignUp';
    let myInit = {
        body: {
            "username" : username,
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function disableUser(username: string){
    let apiName = 'AdminQueries';
    let path = '/disableUser';
    let myInit = {
        body: {
            "username" : username,
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function enableUser(username: string){
    let apiName = 'AdminQueries';
    let path = '/enableUser';
    let myInit = {
        body: {
            "username" : username,
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function getUser(username: string){
    let apiName = 'AdminQueries';
    let path = '/getUser';
    let myInit = {
        body: {
            "username" : username,
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.get(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function listUsers(token?: string, limit?: number){
    let apiName = 'AdminQueries';
    let path = '/listUsers';
    let myInit = {
        body: {
            "token" : token,
            "limit" : limit
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function listGroups(token: string, limit: number){
    let apiName = 'AdminQueries';
    let path = '/listGroups';
    let myInit = {
        body: {
            "token" : token,
            "limit" : limit
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.get(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function listGroupsForUser(username: string){
    let apiName = 'AdminQueries';
    let path = '/listGroupsForUser';
    let myInit = {
        body: {
            "username" : username
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function listUsersInGroup(groupname: string){
    let apiName = 'AdminQueries';
    let path = '/listUsersInGroup';
    let myInit = {
        body: {
            "groupname" : groupname
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}

export async function SignUserOut(username: string){
    let apiName = 'AdminQueries';
    let path = '/SignUserOut';
    let myInit = {
        body: {
            "username" : username
        },
        header: {
            'content-type' : 'application/json',
            Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }

    }

    return new Promise((resolve, reject) => {
        API.post(apiName, path, myInit).then((value) => {
            resolve(value);
        }).catch((err) => reject(err));
    })
}