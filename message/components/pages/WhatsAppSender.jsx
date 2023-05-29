import React, { useState, useEffect } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from "react-reveal/Fade";
import useStateContext from "../../context/ContextProvider";


const WhatsAppSender = () => {

  const { fetchQRCodeWhatsapp } = useStateContext();

  return (
    <Fade duration={500} >
      <div className='pt-[80px] lg:p-[50px] h-[calc(100vh-60px)] overflow-y-auto' >
        <div className='px-[10px] lg:p-0' >
          <h1 className='text-[18px] lg:text-[24px] text-slate-600 font-semibold' >WhatsApp Sender</h1>
          <p className='text-[13px] lg:text-[15px] text-slate-400 my-2' >Send message via WhatsApp</p>
        </div>
        <div className='w-screen lg:w-[1400px] bg-white rounded-md lg:shadow-default px-[20px] py-[30px] lg:mt-12 ' >
          {/* icon */}
          <div className='w-full justify-center flex' >
            <div className='w-fit mb-6 p-[24px] md:p-[32px] bg-green-500 text-white rounded-full hover:scale-110 hover:rotate-[360deg] transition-all duration-700' >
              <WhatsAppIcon className='scale-[1.5] md:scale-[2.5]' />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-6 lg:gap-8' >
            <div className='flex-1 flex flex-col gap-5 lg:gap-8 lg:p-[15px]' >

              <h1 className='text-[16px] lg:text-[19px] text-slate-600 font-semibold' >Message Pattern</h1>
              <div className='w-full' >
                <FormControl
                  className='w-full'
                  variant="outlined"
                  size='small'
                >
                  <InputLabel htmlFor="outlined-adornment-password">Your Phone No</InputLabel>
                  <OutlinedInput
                    name="password"
                    label="Your email address"
                    // error={Boolean(formState.errors.password)}
                    // onChange={handleChange}
                    // value={formState.password}
                    // onBlur={handleBlur}
                    // type={formState.showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <QuestionMarkIcon className='scale-[.9]' />
                      </InputAdornment>
                    }
                  />
                  {/* {formState.errors.password && <FormHelperText error>{formState.errors.password}</FormHelperText>} */}
                </FormControl>
              </div>


              <div className='w-full' >
                <FormControl
                  className='w-full'
                  variant="outlined"
                  size='small'
                >
                  <InputLabel htmlFor="outlined-adornment-password">Recipient(s) Phone No</InputLabel>
                  <OutlinedInput
                    name="password"
                    label="Recipient(s) email"
                    // error={Boolean(formState.errors.password)}
                    // onChange={handleChange}
                    // value={formState.password}
                    // onBlur={handleBlur}
                    // type={formState.showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">

                        <QuestionMarkIcon className='scale-[.9]' />

                      </InputAdornment>
                    }
                  />
                  {/* {formState.errors.password && <FormHelperText error>{formState.errors.password}</FormHelperText>} */}
                </FormControl>
              </div>

             


            </div>
            <div className='flex-1 flex flex-col gap-5 lg:gap-8 lg:p-[15px]' >
              <h1 className='text-[16px] lg:text-[19px] text-slate-600 font-semibold' >Message Content</h1>
              <div className='w-full' >
                <FormControl
                  className='w-full'
                >
                  <TextField
                    size='small'
                    label="Your message here"
                    // error={Boolean(formState.errors.age)}
                    // helperText={formState.errors.age}
                    name="age"
                    multiline
                    rows={10}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  // value={formState.age}
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center mb-8' >
            <button className='bg-green-500 text-slate-100 text-[14px] lg:text-[17px] w-full lg:w-[500px] py-[8px] rounded-md mt-6 hover:opacity-80 active:opacity-75 transition-all' >Send to WhtasApp</button>
          </div>
        </div>
      </div>
    </Fade>

  )
}

export default WhatsAppSender