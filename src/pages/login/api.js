import http from '../../lib/http'

export const login = body => {
    return http.post('/api/1.0/auth', body)
}