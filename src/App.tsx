import { ChangeEvent, useState } from 'react'
import style from './home.module.css'
import { IDate } from './inerfaces'
const App = ():JSX.Element => {

  const data:IDate[] = [
    {
     title:"Omar",
     id:1,

    },
    {
      title:"Abdulloh",
      id:2,
 
     },
     {
      title:"Ertugrul",
      id:3,
 
     }

  ]
  const [title,SetTitle] = useState <string>()
  const [arr,SetArr] = useState<IDate[]>(data)

  const changeHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    SetTitle(evt.target.value)
  }

  const handlerSubmit = ():void => {
     if (!title?.length) return
      
     const newDate = {
      title:title,
       id:new Date().getTime()
     }

     SetArr([...arr,newDate])

     SetTitle('')
    
  }

  const DeleteItem =(id:number):void => {
    const newDate = arr.filter(c => c.id != id)
    SetArr(newDate)
  }

  return (
    <div className={style.todo}>
     <h1 className={style.title}>
      APP-TODO
     </h1>
     <input placeholder='Enter Todo' value={title} onChange={changeHandler}
      className={style.input}/>
      <button onClick={handlerSubmit} className={style.button}>
        Add Todo
      </button>
       <div className={style.card}>
       {arr.map((c) => {
          return (
            <div key={c.id} className={style.cardItem}>
            <p>{c.title}</p>
             <button onClick={() => DeleteItem(c.id)}>Del</button>
            </div>

          )
        })}
       </div>
       <div>
        
      </div>
      

    </div>
  )
}

export default App