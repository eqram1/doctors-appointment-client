import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appoinment today</h1>
                        <p className="text-white py-7">Allow only patient in treatment room,Visitors wait in visitor room.Serial maintain mendatory.Hygienic profer uniform & Clean environment compulsory & request to all for maintain please.</p>
                        <PrimaryButton>Appointment today</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;