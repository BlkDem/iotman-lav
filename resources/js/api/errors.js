import ServiceLogout from "../api/services/logout";

export function errorEvent(error) {
    console.error('event: ' + error)
    if (error.response?.status === 401) {
        ServiceLogout.methods.logout();
    }
}
