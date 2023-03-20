import React from 'react'
import './App.css';
const arr: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 7, 7, 7]
const list = new Array(100).fill(1).map((item,k)=>{
   return {
    id: k,
    name: '张三' + k
   }
})
class List extends React.Component {
  state: {
   
  }
  render() {
    return (
      <div>
        <ul className='card-wrap'>
          {list.map((item) => (
            <li key={item.id} className="card-item">
              {item.name}
            </li>
          ))}
        </ul>
        {/* {this.state.list.map((item:number,k):void => {
        //   <div key={k}>
        //     <p>{11}</p>
        //   </div>
        })
        } */}
      </div>
    )
  }
}
export default List
