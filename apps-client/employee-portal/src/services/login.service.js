import { httpService } from './http.service';

export const loginService = {
    login,
    logout,
};

function login(username, password) {
    const dataLogin = { username: username, password: password };
    return httpService.post("authenticates/login", dataLogin);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
