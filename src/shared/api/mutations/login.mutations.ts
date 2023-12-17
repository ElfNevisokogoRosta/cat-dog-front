import { axiosRequest } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';
import { IUser } from '@/types/entity/User';


const loginUser = (data: IUser)=>{
  return axiosRequest.request({
    method: 'POST',
    url: '/users/login',
    data
  })
}

export const useLoginUser = ()=>{
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ['users', 'login']
  })
}