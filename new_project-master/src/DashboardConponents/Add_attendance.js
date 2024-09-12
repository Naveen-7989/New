import React from 'react'
import { useForm } from 'react-hook-form'

export default function Add_attendance() {
  const {register,onSubmit,handleSubmit,watch,formState: { errors },} = useForm()

  return (
    <div className='Add_attendance pb-5'>
    <div className=''>
       <div className='border rounded-4 Add_attend_bg'>
       <div className='overflow-scroll'>
       <table className='w-100 my-2 mx-2  mb-3'>
       <tbody className=''>
       <tr>
            <td className='p-3 td2'><p><strong>Rahul</strong></p></td>
            <td className='p-3 td2'><p><strong>Naveen</strong></p></td>
            <td className='p-3 td2'><p><strong>Sravan</strong></p></td>
            <td className='p-3 td2'><p><strong>Prem</strong></p></td>
            <td className='p-3 td2'><p><strong>Rahul</strong></p></td>
            <td className='p-3 td2'><p><strong>Rahul</strong></p></td>
            <td className='p-3 td2'><p><strong>Rahul</strong></p></td>
          </tr>
          <tr className='bg-white boderstyle rounded-4'>
            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>
            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>
            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>
            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>
            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>
            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>

            <td>
            <select name='name ' className='width text-center p-1 border-0' defaultValue="">
              <option value="" disabled>Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
            </td>
    
          </tr>
       </tbody>
       </table>
       
       
       </div>

       </div>

    </div>

    </div>
  )
}
