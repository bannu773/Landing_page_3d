import axios from 'axios';
import { BASE_URL } from '../Api/api';
import {message} from 'antd'
export const LoginService = async(data) =>{
    try {
        const res = await axios.post(`${BASE_URL}login`,  data);
        if(res.data.success === true) {
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        return res.data;
    } catch (error) {
        return error.message;
    } 
}

export const SignUpService =  async(signupData)=>{
    
    try{
        const res = await axios.post(`${BASE_URL}signup`, signupData);
        if(res.data.success === true) {
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        return res.data;
    }
    catch(error){
        return error.message
    }
}

 export const OTPService =  async(otpData)=>{
    try{
        const otpCredintials = {
            email: otpData
        };
        const res = await axios.post(`${BASE_URL}sendotp`, otpCredintials);
        if(res.data.success === true) {
            console.log("lll")
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        return res.data;
    }
    catch(error){
        return error.message
    }
 }


 export const forgotPasswordLinkService = async(forgotpasswrodLinkData)=>{
    try{
        console.log(forgotpasswrodLinkData);
        const res = await axios.post(`${BASE_URL}resetpasswordtoken`, forgotpasswrodLinkData);
        if(res.data.success === true) {
            console.log("lll")
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
        console.log(res.data);
        return res.data;
    }
    catch(error){
        return error.message
    }
 }