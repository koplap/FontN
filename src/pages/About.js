import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
    const [userData, setUserData] = useState({ name: '', email: '', picture: '' });

    useEffect(() => {
        // ดึงข้อมูลผู้ใช้งานจาก API เมื่อโหลดหน้า
        const token = localStorage.getItem('token'); // สมมติว่า token ถูกเก็บใน localStorage
        axios.get('http://localhost:4000/account', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <img 
                src={`http://localhost:4000/${userData.picture}`} 
                alt="Profile" 
                className="rounded-full mb-4 shadow-lg"
            />
            <h1 className='text-black font-bold text-2xl mb-2'>{userData.name}</h1>
            <p className="text-gray-700 text-center">
                ยินดีต้อนรับเข้าสู่โปรไฟล์ของ {userData.name} <br/>
                ชอบการเรียนรู้เกี่ยวกับโครงงานและเทคโนโลยี
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                ติดต่อผู้ใช้งาน
            </button>
        </div>
    );
}

export default About;
