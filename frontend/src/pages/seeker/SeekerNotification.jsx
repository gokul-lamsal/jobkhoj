import React from 'react'
import Button from '../../components/global/Button'
import { FiCheckCircle, FiXCircle, FiBriefcase, FiShield } from "react-icons/fi";

const SeekerNotification = () => {
    const notifications = [
        {
            "id": 1,
            "type": "accepted",
            "title": "Application accepted",
            "message": "Your application for Backend Intern has been accepted.",
            "time": "5 min ago",
            "unread": true
        },
        {
            "id": 2,
            "type": "rejected",
            "title": "Application rejected",
            "message": "Your application for DevOps Intern has been rejected.",
            "time": "2 days ago",
            "unread": true
        },
        {
            "id": 3,
            "type": "job",
            "title": "New job posted",
            "message": "InnoLabs posted a new job: React Native Dev.",
            "time": "3 days ago",
            "unread": false
        },
        {
            "id": 4,
            "type": "welcome",
            "title": "Welcome to Lunar Portal",
            "message": "Your account is verified. Complete your profile to get noticed. ",
            "time": "1 week ago",
            "unread": false
        }
    ]
    const iconMap = {
        accepted: { Icon: FiCheckCircle, bg: "bg-green-100", color: "text-green-600" },
        rejected: { Icon: FiXCircle, bg: "bg-red-100", color: "text-red-600" },
        job: { Icon: FiBriefcase, bg: "bg-indigo-100", color: "text-indigo-600" },
        welcome: { Icon: FiShield, bg: "bg-gray-100", color: "text-gray-600" },
    };
    return (
        <main>
            <section className=" flex flex-col pt-8">
                <div className='flex justify-between'>
                    <div>
                        <h1 className="font-bold text-2xl">Notification</h1>
                        <p className="text-sm text-gray-400">
                            Update about your application and new jobs.
                        </p>
                    </div>
                    <div className='h-10'>
                        <Button type='button' text={<> <span className='mr-2'>✓ </span> Mark all as read </>} btnType='secondary' classname={"text-gray-900!"} />
                    </div>
                </div>
                <div className='mt-5 flex gap-3'>
                    <button className=" px-8 py-2 cursor-pointer border h-10 border-primary text-white  bg-primary rounded-3xl">
                        All
                    </button>
                    <button className='px-6 py-2 cursor-pointer border h-10  border-gray-300 text-gray-700 rounded-3xl'>
                        Unread
                    </button>
                </div>

            </section>
            <section className="mt-5 pb-8">
                <div className="bg-white border w-240  border-gray-300 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-center "
                >
                    {notifications.map((n, i) => {
                        const { Icon, bg, color } = iconMap[n.type];
                        return (
                            <div
                                key={i}
                                className={`flex items-center border-b border-gray-100 gap-4 px-5 py-4 ${n.unread ? "bg-indigo-50" : "bg-white"
                                    } `}
                            >
                                <div
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${bg}`}
                                >
                                    <Icon className={`w-5 h-5 ${color}`} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900">{n.title}</p>
                                    <p className="text-sm text-gray-500 truncate">{n.message}</p>
                                </div>

                                <span className="text-xs text-gray-500 whitespace-nowrap">{n.time}</span>

                                {n.unread && <span className="w-2 h-2 rounded-full bg-indigo-600" />}

                            </div>

                        );
                    })}

                </div>
            </section>
        </main>
    )
}

export default SeekerNotification