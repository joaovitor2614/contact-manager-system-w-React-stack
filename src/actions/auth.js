import { firebase, provider, gitProvider } from '../firebase/firebase'




export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(provider)
            .catch((error) => {
                console.log(error.name, error.message)
            })
    }
}

export const startLoginGit = () => {
    return () => {
        return firebase.auth().signInWithPopup(gitProvider)
            .catch((error) => {
                console.log(error.name, error.message)
            })
    }
}


export const logout = () => ({
    type: 'LOGOUT'
})


export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export const saveUserData = (data) => ({
    type: 'USER_DATA',
    data
})