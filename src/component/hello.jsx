import {Button} from 'antd'
import {useState} from 'react'
import './hello.css'

export default function Hello(){
    let [count, setCount] = useState(0);
    return (
        <div className='hello'>
            <Button type='primary' onClick={()=> setCount(++count)}>Primary Button</Button>
            <div><span>{count}</span></div>
        </div>
    )
}
