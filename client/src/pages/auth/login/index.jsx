// import CommonForm from '@/components/common/form'
// import { loginFormControls} from '@/config';
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// const initialState = {
//     email: "",
//     password: "",
// };



// export default function Login() {
//     const [formData, setFormData] = useState(initialState)
//     function onSubmit(event) {
//         event.preventDefault()


//     }
//     return (
//         <div className="mx-auto w-full max-w-md space-y-6">
//             <div className="text-center">
//                 <h1 className="text-3xl font-bold tracking-tight text-foreground">
//                 Sign in to your account
//                 </h1>
                
//             </div>
//             <CommonForm
//                 formControls={loginFormControls}
//                 buttonText={"Sign In"}
//                 formData={formData}
//                 setFormData={setFormData}
//                 onSubmit={onSubmit}
//             />
//             <p className="mt-2">
//                     Already have an account
//                     <Link
//                         className="font-medium ml-2 text-primary hover:underline"
//                         to="/auth/register"
//                     >
//                         Register
//                     </Link>
//                 </p>
//         </div>
//     )
// }


import useFormFields from '@/Utils/useFormFields';
import CommonForm from '@/components/common/form'
import { login } from '@/store/auth-slice';
// import { registerFormControls } from '@/config';
// import { registerUser } from '@/store/auth-slice';
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, useToast } from 'react-toastify';

const initialState = {
    userName: "",
    email: "",
    password: "",
};



export default function Login() {
    const [fields, handleChange] = useFormFields(initialState)
 
   const dispatch=useDispatch()
    // const navigate = useNavigate();
    const handleSubmit =async (event) => {
        event.preventDefault()
        await axios.post("http://localhost:5000/api/v1/auth", fields)
          .then(res => {
            console.log(res?.data?.status)
            if (res?.data?.status=="success") {
                console.log("sucess")
                console.log(res?.data,"loginPage")
                dispatch(login({token:res?.data?.data?.token,user:res?.data?.data?.user}))
                
                console.log(res?.data?.message,"message")
                // navigate("/")
            // toast.success('Register succesfully')
            
            }
            
          }).catch(err => {
            toast.error('login failed')
            
            console.log(err)
          })
      
    
      }
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-2">
                    You don't have an account,please register 
                        <Link
                            className="font-medium ml-2 text-primary hover:underline"
                            to="/auth/register"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
