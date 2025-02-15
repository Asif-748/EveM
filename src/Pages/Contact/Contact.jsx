import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="w-[98%] max-w-5xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-3xl border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">Have any questions? Feel free to reach out to us!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center gap-4">
                    <FaEnvelope className="text-blue-500 text-2xl" />
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-700">contact@eventpro.com</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center gap-4">
                    <FaPhone className="text-blue-500 text-2xl" />
                    <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-700">+123 456 7890</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                    <div>
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p className="text-gray-700">123 Event Street, New York, NY</p>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-700 text-center mt-10">Follow Us</h3>
            <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
                <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
                <a href="#" className="text-pink-500 text-2xl hover:text-pink-700"><FaInstagram /></a>
            </div>

            <form className="mt-10 bg-gray-100 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>
                <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" required />
                <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" required />
                <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg resize-none" rows="4" required></textarea>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg mt-4 font-semibold">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
