export const useAuth = () => {
    const token = localStorage.getItem("acesstoken")
    return token && token.length > 0
}