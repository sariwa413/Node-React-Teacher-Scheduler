import { jwtDecode } from 'jwt-decode'

const DecodeToken = () => {
    const token = localStorage.getItem("token")
    
    
    if (token!=undefined) {
        const userDecode = jwtDecode(token)
        const {roles} = userDecode
        const{_id}= userDecode
        console.log(`id = ${_id}`)
        return {roles, _id}
    }
    return null
}

export default DecodeToken