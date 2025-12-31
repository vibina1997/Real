import React from 'react'
import  Tophead from './Tophead'
import Propertyarea from './Propertyarea'
import Lastpage from './Lastpage'
import Headbelow from './Headbelow'
import MyPropertyDetails from './MyPropertyDetails'
import AddProperty from './AddProperty'
const Mainpart = () => {
  return (
    <div>
     <Tophead/>
     <Headbelow/>
     <Propertyarea/>
     <MyPropertyDetails/>
     <AddProperty/>
     <Lastpage/>
    </div>
  )
}

export default Mainpart

