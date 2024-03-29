"use client"
import React, { useEffect, useRef, useState } from 'react'
// import { useRef } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { UseDispatch, useDispatch } from 'react-redux'
import { AuthencticationAction } from '@/reducer/reducer'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

function Auth() {
  const dispatch=useDispatch()
  const router=useRouter()

  const signUpformik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      passWord: '',
    },
    onSubmit: values => {
      console.log(values)
      dispatch(AuthencticationAction.Logout())
      router.push('/auth')
    },

    validationSchema:Yup.object({
      firstName:Yup.string().required('this field is required'),
      lastName:Yup.string().required('this field is required'),
      email:Yup.string().email('invalid email address').required('email is required'),
      passWord:Yup.string().min(6,({min})=>`password must be more than ${min} characters`).required('password is required'),
    })
  })



  const loginFormik = useFormik({
    initialValues: {
      email: '',
      passWord: '',
    },
    onSubmit: values => {
      console.log(values)
      dispatch(AuthencticationAction.Login(values))
      router.push('/dashboard')


    },
    validationSchema:Yup.object({
      email:Yup.string().email('invalid email address').required('email is required'),
      passWord:Yup.string().min(6,({min})=>`password must be more than ${min} characters`).required('password is required'),
    })
  })






  let login_btn = useRef()
  let signup_btn = useRef()
  let select_btn = useRef()
  let login_form = useRef()
  let signup_form = useRef()


  function toggleBtn() {
    login_btn.current.addEventListener('click', function () {
      console.log('login clicked')
      select_btn.current.style.transform = 'translateX(0)'
      signup_btn.current.classList.remove('btn_active')
      login_btn.current.classList.add('btn_active')
      login_form.current.style.transform = 'translateX(0)'
      signup_form.current.style.transform = 'translateX(100%)'
    })

    signup_btn.current.addEventListener('click', () => {
      console.log('signup clicked')
      select_btn.current.style.transform = 'translateX(100%)'
      login_btn.current.classList.remove('btn_active')
      signup_btn.current.classList.add('btn_active')
      login_form.current.style.transform = 'translateX(-100%)'
      signup_form.current.style.transform = 'translateX(-100%)'
    })
  }


  useEffect(() => {
    toggleBtn()
  }, [])

  return (
    <div className='bg-[#101720] flex flex-col justify-center  items-center lg:w-full lg:h-[100vh] md:h-[100vh] md:w-full sm:h-[100vh] sm:w-full max-sm:h-[100vh] max-sm:w-full '>

      <div className=' bg-slate-100 rounded-lg flex flex-col lg:h-[90%] lg:w-[40%] md:h-[90%] md:w-[50%] sm:h-[90%] sm:w-[60%] max-sm:h-[90%] max-sm:w-[80%]  p-5  auth_holder relative'>
        <div className='flex flex-row justify-evenly h-[10%] w-[100%] relative'>
          <div className="btn_selector absolute top-0 left-0 h-full w-[50%]  bg-[#101720] rounded-md" ref={select_btn}></div>
          <button className='relative w-[50%] btn_active' ref={login_btn}>Login</button>
          <button className='relative w-[50%]' ref={signup_btn} >Signup</button>
        </div>

        <form method='post' action="" ref={login_form} onSubmit={loginFormik.handleSubmit} className='h-[90%] w-[100%] p-5 left-0 flex flex-col justify-center items-center'>
        
          <label className="input input-bordered flex items-center gap-2 w-[80%] mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" name='email' id='email' value={loginFormik.values.email} onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur}/>
            
          </label>
          {(loginFormik.errors.email && loginFormik.touched.email) &&
                        <p className=' text-red-600 text-sm text-left'>{loginFormik.errors.email}</p>
                        }




          <label className="input input-bordered flex items-center gap-2 w-[80%] mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password"  className="grow" value={loginFormik.values.passWord}  id='passWord' name='passWord' onChange={loginFormik.handleChange} onBlur={loginFormik.handleBlur} placeholder='Password'/>
          
           
          </label>
          {(loginFormik.errors.passWord && loginFormik.touched.passWord) &&
                        <p className=' text-red-600 text-sm text-left'>{loginFormik.errors.passWord}</p>
                        }

          <button class="btn btn-success mt-5" type='submit'>Login</button>


        </form>

        <form method='post' action="" ref={signup_form} onSubmit={signUpformik.handleSubmit} className='h-[90%] w-[100%] p-5  left-[100%] flex flex-col  items-center'>

          <label class="input input-bordered flex items-center gap-2 w-[80%] mt-10">
            Name
            <input type="text" class="grow " placeholder="Daisy" name='firstName' id='firstName' value={signUpformik.values.firstName} onChange={signUpformik.handleChange} />
          </label>
          {(signUpformik.errors.firstName && loginFormik.touched.firstName) &&
                        <p className=' text-red-600 text-sm text-left'>{signUpformik.errors.firstName}</p>
                        }

          <label class="input input-bordered flex items-center gap-2 w-[80%] mt-5">
            Others
            <input type="text" class="grow" placeholder="Daisy" id='lastName' value={signUpformik.values.lastName} onChange={signUpformik.handleChange}/>
          </label>
          {(signUpformik.errors.lastName && signUpformik.touched.lastName) &&
                        <p className=' text-red-600 text-sm text-left'>{signUpformik.errors.lastName}</p>
                        }

          <label className="input input-bordered flex items-center gap-2 w-[80%] mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" id='email' value={signUpformik.values.email}  onChange={signUpformik.handleChange}/>
          </label>
          {(signUpformik.errors.email && signUpformik.touched.email) &&
                        <p className=' text-red-600 text-sm text-left'>{signUpformik.errors.email}</p>
                        }

          <label className="input input-bordered flex items-center gap-2 w-[80%] mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder='Password' value={signUpformik.values.passWord} id='passWord' name='passWord' onChange={signUpformik.handleChange} />
          </label>
          {(signUpformik.errors.passWord && signUpformik.touched.passWord) &&
                        <p className=' text-red-600 text-sm text-left'>{signUpformik.errors.passWord}</p>
                        }

          <button class="btn btn-neutral mt-5" type='submit'>Signup</button>


        </form>


      </div>



    </div>
  )
}

export default Auth