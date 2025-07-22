import http from '../../lib/http'

export const signup = body => {
    return http.post('/api/1.0/users', body)
}