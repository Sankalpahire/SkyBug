import React from 'react'
import Layout from '../../layout/layout'
import UserMenu from '../../layout/UserMenu'
import { useAuth } from '../../../Context/Auth'
const Dashboard = () => {
  const [auth] = useAuth()
  return (
   <Layout>
    <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu />
            </div>
            <div className='col-md-9'>
               <div className='card w-75 p-3'>
                   <h3>Name : {auth?.user?.name}</h3>
                   <h3>Email : {auth?.user?.email}</h3>
                   <h3>Role : {auth?.user?.role}</h3>
               </div>
            </div>
        </div>
    </div>
   </Layout>
  )
}

export default Dashboard