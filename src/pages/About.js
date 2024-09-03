import React from 'react';
function About() {
    return (  
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <img 
                src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-1/443819549_1616737379097714_473842459149660639_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeG3AaV0DR8N1akIak71QwBMRZ-9CTFb9n9Fn70JMVv2f6Scfeg3BpiZNmtDHQtWaXvq_euF89owZT9Iwfoulg80&_nc_ohc=N6a2PWMEE1sQ7kNvgGa_7OQ&_nc_ht=scontent.fbkk6-2.fna&oh=00_AYDh27b5QMlY-9qWdMbALeX9qrFSmLZM9cWyP9OVp3m__g&oe=66DC94EC" 
                alt="Profile" 
                className="rounded-full mb-4 shadow-lg"
            />
            <h1 className='text-black font-bold text-2xl mb-2'>กอบลาภ แก้ววงษา</h1>
            <p className="text-gray-700 text-center">
                ยินดีต้อนรับเข้าสู่โปรไฟล์ของ นาย กอบลาภ แก้ววงษา <br/>
                ชอบการเรียนรู้เกี่ยวกับโครงงานและเทคโนโลยี
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                ติดต่อผู้ใช้งาน
            </button>
        </div>
    );
}

export default About;