export const AddNewUser = (user) => {
    return { type: "ADD_NEW_USER", payload: user }
}

export const setManagerPass = (newPass) => {
    return { type: "SET_MANAGER_PASS", payload: newPass }
}

export const setUserStatus = (newStatus) => {
    return { type: "SET_USER_STAUS", payload: newStatus }
}
