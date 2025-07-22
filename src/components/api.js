import http from "../lib/http";

export const logout = () => {
    return http.post('/api/1.0/logout')
}