import React, { Component, PureComponent } from 'react'
import { fromJS } from 'immutable';
import shallowEqual from '../utils/shallowEqual';

class Immu extends PureComponent {
  render() {
    const data = fromJS({
      list: [1,2,3],
      map: {
        map1: {
          map11: {
            a: 1,
            b: {
              c:2
            }
          }
        }
      },
      age:8
    })
  
    Object.keys(data).forEach((key)=>{
     console.log(key, data[key]) // Charph-log
    })
    const data2 = data.set('age', 9)
    console.log(data2.get('age'), 'age') // Charph-log
   
   Object.keys(data2).forEach((key)=>{
     console.log(key, data2[key]) // Charph-log
    })
    const isEqual = shallowEqual(data, data2)
    console.log(isEqual, 'isEqual') // Charph-log 
    return (
      <div>
        Immu
      </div>
    )
  }
}

export default Immu;