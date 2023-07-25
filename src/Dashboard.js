// Dashboard.js
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dashboard, logout,loginSuccess, increment, decrement } from './actions';
import './Dashboard.css'

const Dashboard = () => {
  
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const dashboards = useSelector((state) => state.deskripsi);
  const counters = useSelector((state) => state.counter)

  useEffect(() => {
    dispatch(dashboard("Ini adalah halaman Dashboard yang berisi halaman pertama saat user berhasil Login ke website ini. Dibawah ini saya membuat fungsi increment dan decrement dengan menggunakan redux")); // Panggil aksi dashboard saat komponen dipasang
    dispatch(loginSuccess(userData));
  
  }, [dispatch]);
 
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
    <header style={{backgroundColor: 'aqua'}}>
      <h1 style={{padding:'1rem',textAlign:'center'}}>Welcome to My Dashboard ❤</h1>
      <button onClick={handleLogout}>Logout</button>
      </header>
      <section style={{display:'flex', paddingLeft:'1rem', paddingRight:'1rem'}}>
      <div style={{backgroundColor:'white', width:'30%', padding:'1rem', border:'1px solid aqua'}}>
      <h3 style={{fontSize:'16px'}}>Data Login</h3>
      <p style={{fontSize:'13px'}}>Username: {userData.username}</p>
      <p style={{fontSize:'13px'}}>Email: {userData.email}</p>
      </div>
      <div style={{padding:"2rem"}}>{dashboards}</div>
      </section>
      <div className='app'>
        <button onClick={()=>dispatch(increment())}>-</button>
        <p>{counters}</p>
        <button onClick={() =>dispatch(decrement())}>+</button>
      </div>
     
    </div>
  );
};

export default Dashboard;
