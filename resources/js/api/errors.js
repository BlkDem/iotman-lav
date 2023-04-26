export const redirectTo = '/login'

export function errorEvent(error) {
    console.error(error)
    if (error.response?.status === 401) {
        window.location.href = redirectTo
    }
}
