const makeUser = [
    {
        username: 'mollie',
        password: 'mollie123'
    }
]
export const userApi = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = makeUser.find(
                (u) => u.username === username && u.password === password
            )
            if (user) {
                resolve(`${user.username}-token`)
            }
            reject('user not found or password is incorrect')
        }, 2000)
    })
}
export const saveToken = (token) => {
    localStorage.setItem('token', token)
}
export const clearToken = () => {
    localStorage.removeItem('token')
}
