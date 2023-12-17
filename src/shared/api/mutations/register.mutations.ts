import {axiosRequest} from "@/shared/api";
import {useMutation} from "@tanstack/react-query";
import {IUser} from "@/types/entity/User";

const registerUser = (data: IUser)=>{
    return axiosRequest.request({
        method: "POST",
        url: '/users',
        data
    })
}

export const useRegisterUser = ()=>{
    return useMutation({
        mutationFn:registerUser,
        mutationKey: ['user', 'register']
    })
}