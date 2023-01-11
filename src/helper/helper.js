import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN
// Make api request


// authenticate function
const authenticate = async(username)=>{
try{

    return await axios.post('/api/authenicate' ,{username})
}catch(error){
    return {error: "Username doesn't exist...!"}
}

}


// get user details 
const getUser = async({username}) =>{
   try{
 const {data} = await axios.get(`/api/user/${username}`);
 return {data}
   }catch(error){
    return {error: "Password doesn't match..!"}
   }
}

// register user function
const registerUser = async(credentials)=>{
    try{
      const {data:{msg}, status} =  await axios.post(`/api/register`, credentials);
      let {username, email} = credentials;
      
    //   send email
if(status ===201){
     await axios.post('/api/registerMail', {username, userEmail, text:msg})
}

    }catch(error){
        return Promise.reject({error})
    }
}



// login function
const verifyPassword = async({username, password})=>{
    try{
        if(username){
           const {data} = await axios.post('/api/login', {username, password})
           return Promise.resolve({data})
        }
    }catch(error){
        return Promise.reject({error:"Password doesn't Match..!"})
    }
}


// update user profile function
const updateUser = async(response)=>{
    try{
const token = await localStorage.getItem('token');
const data = await axios.put('/api/updateuser', response, {header:{"Authorization":`Bearer ${token}`}})

return Promise.resolve({data})
    }catch(error){
        return Promise.reject({error:"couldn't update the user"})
    }
}

// generate otp
const generateOTP = async(username)=>{
    try{
       
        const{data:{code}, status} = await axios.get('/api/generateOTP', {params:{username}})


        // send email
        if(status ===201){
            let {data:{email}} = await getUser({username})
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`
            await axios.post('/api/registerMail', {username, userEmail, text, subject:"Password Recovery OTP"})
        }
       return Promise.resolve(code);

    }catch(error){
        return Promise.reject({error})
    }
}

// verify otp
const verifyOTP= async({username,code})=>{
    try{
        
        const {data, status} = await axios.get('/api/verifyOTP',{params:{username, code}})
        return {data, status}
    }catch(error){
        return Promise.reject(error)
    }
}


const resetPassword = async({username, password})=>{
    try {
        const { data, status } = await axios.put('/api/resetPassword', { username, password });
        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

module.exports ={ 
    authenticate,
    getUser,
    registerUser,
    verifyPassword,
    updateUser,
    generateOTP,
    verifyOTP,
    resetPassword
}