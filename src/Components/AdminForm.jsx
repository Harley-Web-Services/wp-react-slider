import  React from 'react'
import {useForm} from 'react-hook-form'
import Axios from 'axios';

const AdminForm = () => {
    const { handleSubmit , register, errors} = useForms()
    const onSubmit = values =>
    axios.post('../data',values) 
    .then((resp)=() => console.log(resp))
    
    console.log(values)
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <input    
            name="design name"
            ref={register({})}
            />
            <input 
             name="imgUrl"
             ref={register({})}
             />
             <input 
             name="customer name"
             ref={register({})}
             />
             <input
             name="comment"
             ref={register({})}
             />
             <input type="submit" ref={register({})}/>
                   </form>
  )
}