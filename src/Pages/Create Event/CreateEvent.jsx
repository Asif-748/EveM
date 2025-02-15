import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaInfoCircle, FaEnvelope, FaPhone, FaUsers, FaTag } from 'react-icons/fa';

const CreateEvent = () => {
    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({
        id: null,
        name: '',
        date: '',
        time: '',
        location: '',
        description: '',
        email: '',
        phone: '',
        organizer: '',
        category: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(savedEvents);
    }, []);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            setEvents(events.map(event => event.id === eventData.id ? eventData : event));
            setEditing(false);
        } else {
            setEvents([...events, { ...eventData, id: Date.now() }]);
        }
        setEventData({ id: null, name: '', date: '', time: '', location: '', description: '', email: '', phone: '', organizer: '', category: '' });
    };

    const handleEdit = (event) => {
        setEventData(event);
        setEditing(true);
    };

    const handleDelete = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <div className="w-[99%] max-w-5xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-3xl border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Create Event</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['name', 'date', 'time', 'location', 'email', 'phone', 'organizer', 'category'].map((field, index) => (
                        <div key={index} className="relative">
                            <span className="absolute left-3 top-3 text-blue-500">
                                {field === 'name' && <FaCalendarAlt />}
                                {field === 'date' && <FaClock />}
                                {field === 'time' && <FaClock />}
                                {field === 'location' && <FaMapMarkerAlt />}
                                {field === 'email' && <FaEnvelope />}
                                {field === 'phone' && <FaPhone />}
                                {field === 'organizer' && <FaUsers />}
                                {field === 'category' && <FaTag />}
                            </span>
                            <input type={field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'}
                                name={field}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                value={eventData[field]}
                                onChange={handleChange}
                                className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm" 
                                required />
                        </div>
                    ))}
                </div>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-blue-500"><FaInfoCircle /></span>
                    <textarea name="description" placeholder="Event Description" value={eventData.description} onChange={handleChange} className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm resize-none" rows="3" required></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:opacity-90 transition">
                    {editing ? 'Update Event' : 'Create Event'}
                </button>
            </form>
            
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-700 text-center">Upcoming Events</h3>
                {events.length > 0 ? events.map(event => (
                    <div key={event.id} className="bg-gray-100 p-5 rounded-xl shadow-md mt-6 flex justify-between items-center border-l-4 border-blue-500">
                        <div>
                            <h4 className="text-lg font-bold text-blue-600">{event.name}</h4>
                            <p className="text-gray-700"><FaCalendarAlt className="inline text-blue-500" /> {event.date} at {event.time}</p>
                            <p className="text-gray-700"><FaMapMarkerAlt className="inline text-blue-500" /> {event.location}</p>
                            <p className="text-gray-700"><FaEnvelope className="inline text-blue-500" /> {event.email}</p>
                            <p className="text-gray-700"><FaPhone className="inline text-blue-500" /> {event.phone}</p>
                            <p className="text-gray-700"><FaUsers className="inline text-blue-500" /> {event.organizer}</p>
                            <p className="text-gray-700"><FaTag className="inline text-blue-500" /> {event.category}</p>
                            <p className="text-gray-700"><FaInfoCircle className="inline text-blue-500" /> {event.description}</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => handleEdit(event)} className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"><FaEdit /></button>
                            <button onClick={() => handleDelete(event.id)} className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg"><FaTrash /></button>
                        </div>
                    </div>
                )) : <p className="text-center mt-4 text-gray-500">No upcoming events.</p>}
            </div>
        </div>
    );
};

export default CreateEvent;
