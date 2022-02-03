import { createContext } from 'react';

const jobDetails = [
    {
        id: 1,
        title: "React JS Developer",
        tag: "iNeuron Intelligence",
        location: "Banglore",
        experience: "0-3 Years",
        epmloymentType: "Full-time",
        jobType: "On-Site",
    },
    {
        id: 2,
        title: "React JS Developer",
        tag: "iNeuron Intelligence",
        location: "Banglore",
        experience: "0-3 Years",
        epmloymentType: "Full-time",
        jobType: "On-Site",
    },
    {
        id: 3,
        title: "React JS Developer",
        tag: "iNeuron Intelligence",
        location: "Banglore",
        experience: "0-3 Years",
        epmloymentType: "Full-time",
        jobType: "On-Site",
    },
    {
        id: 4,
        title: "React JS Developer",
        tag: "iNeuron Intelligence",
        location: "Banglore",
        experience: "0-3 Years",
        epmloymentType: "Full-time",
        jobType: "On-Site",
    }
]

export const JobData = createContext(jobDetails);