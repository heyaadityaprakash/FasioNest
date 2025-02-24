import React from 'react';
import { logo } from '../assets/assets';
function Footer() {
    return ( 
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-10 text-sm'>
                <div>
                    <img src={logo.logo} className='w-30 ' alt="" />
                    <p className='text-gray-600 text-sm'>Home to latest trends</p>
                </div>

                <div>
                    <p className='text-lg font-medium mb-4 '>company</p>
                    <ul className='text-sm text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Become a seller</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg font-medium mb-4'>get in touch</p>
                    <ul className='text-sm text-gray-600'>
                        <li>help@fashionest.com</li>
                        <li>+91 999-0911-123</li>
                    </ul>

                </div>

            </div>

            <div>
                <hr />
                <p className='text-center py-4 text-xs text-gray-600'>Copyright ©Fashionest-2025. All rights reserved.</p>
            </div>

        </div>
     );
}

export default Footer;