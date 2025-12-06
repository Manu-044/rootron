export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    achievements: string[];
    social: {
        linkedin?: string;
        github?: string;
        twitter?: string;
        email?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        id: "sai-manoj-v",
        name: "Sai Manoj V",
        role: "Team Lead",
        image: "/team/sai-manoj.jpg",
        bio: "Sai Manoj is a passionate technologist and leader who coordinates all ROOTRON activities. With a strong background in project management and development, he ensures the team operates smoothly and efficiently.",
        skills: ["Leadership", "Project Management", "Full-Stack Development", "Team Coordination"],
        achievements: [
            "Led team to multiple successful projects",
            "Organized technical workshops and events",
            "Managed team members across multiple domains",
            "Secured recognition for club initiatives"
        ],
        social: {
            linkedin: "https://linkedin.com/in/sai-manoj-v",
            github: "https://github.com/sai-manoj-v",
            email: "saimanoj@rootron.tech"
        }
    },
    {
        id: "pavan-c",
        name: "Pavan C",
        role: "Tech Lead",
        image: "/team/pavan-c.jpg",
        bio: "Pavan is the technical backbone of ROOTRON, specializing in software development and system design. He mentors team members in coding best practices and leads the development of innovative technical solutions.",
        skills: ["Software Development", "System Design", "Programming", "Mentoring"],
        achievements: [
            "Developed key technical solutions for ROOTRON",
            "Contributed to multiple successful projects",
            "Conducted technical training sessions",
            "Winner of various coding competitions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/pavan-c",
            github: "https://github.com/pavan-c",
            email: "pavan.c@rootron.tech"
        }
    },
    {
        id: "ullas",
        name: "Ullas",
        role: "Core Team Member",
        image: "/team/ullas.jpg",
        bio: "Ullas is a dedicated team member with expertise in software development and problem-solving. He contributes significantly to ROOTRON's technical projects and initiatives.",
        skills: ["Software Development", "Problem Solving", "Algorithms", "Team Collaboration"],
        achievements: [
            "Contributed to multiple ROOTRON projects",
            "Participated in hackathons and competitions",
            "Mentored junior team members",
            "Developed innovative technical solutions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/ullas",
            github: "https://github.com/ullas",
            email: "ullas@rootron.tech"
        }
    },
    {
        id: "chaithanya",
        name: "Chaithanya",
        role: "Core Team Member",
        image: "/team/chaithanya.jpg",
        bio: "Chaithanya brings technical expertise and creative problem-solving to ROOTRON. He actively participates in various technical domains and contributes to the team's success.",
        skills: ["Development", "Innovation", "Technical Writing", "Collaboration"],
        achievements: [
            "Active contributor to ROOTRON projects",
            "Participated in technical events",
            "Helped organize club activities",
            "Recognized for technical contributions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/chaithanya",
            github: "https://github.com/chaithanya",
            email: "chaithanya@rootron.tech"
        }
    },
    {
        id: "divith",
        name: "Divith",
        role: "Core Team Member",
        image: "/team/divith.jpg",
        bio: "Divith is an enthusiastic team member with a passion for technology and innovation. He contributes to various ROOTRON initiatives and helps drive the team forward.",
        skills: ["Programming", "Web Development", "Team Work", "Innovation"],
        achievements: [
            "Contributed to web development projects",
            "Participated in team competitions",
            "Assisted in organizing events",
            "Active in technical discussions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/divith",
            github: "https://github.com/divith",
            email: "divith@rootron.tech"
        }
    },
    {
        id: "pavan-d",
        name: "Pavan D",
        role: "Core Team Member",
        image: "/team/pavan-d.jpg",
        bio: "Pavan D is a skilled developer and active contributor to ROOTRON's technical projects. He brings dedication and technical proficiency to the team.",
        skills: ["Software Development", "Coding", "Problem Solving", "Teamwork"],
        achievements: [
            "Developed solutions for ROOTRON projects",
            "Participated in coding competitions",
            "Contributed to open-source initiatives",
            "Mentored peers in technical skills"
        ],
        social: {
            linkedin: "https://linkedin.com/in/pavan-d",
            github: "https://github.com/pavan-d",
            email: "pavan.d@rootron.tech"
        }
    },
    {
        id: "goutham",
        name: "Goutham",
        role: "Core Team Member",
        image: "/team/goutham.jpg",
        bio: "Goutham is a talented developer and active contributor to ROOTRON's technical initiatives. He brings innovation and technical expertise to the team.",
        skills: ["Software Development", "Programming", "Innovation", "Team Collaboration"],
        achievements: [
            "Contributed to multiple ROOTRON projects",
            "Participated in technical competitions",
            "Developed innovative solutions",
            "Active in team activities"
        ],
        social: {
            linkedin: "https://linkedin.com/in/goutham",
            github: "https://github.com/goutham",
            email: "goutham@rootron.tech"
        }
    },
    {
        id: "varshitha",
        name: "Varshitha",
        role: "Core Team Member",
        image: "/team/varshitha.jpg",
        bio: "Varshitha is a talented team member who contributes to ROOTRON with her technical skills and creative approach. She actively participates in various club activities and projects.",
        skills: ["Development", "Design", "Communication", "Project Management"],
        achievements: [
            "Contributed to multiple projects",
            "Participated in technical events",
            "Helped coordinate team activities",
            "Recognized for dedication and skills"
        ],
        social: {
            linkedin: "https://linkedin.com/in/varshitha",
            github: "https://github.com/varshitha",
            email: "varshitha@rootron.tech"
        }
    },
    {
        id: "siri",
        name: "Siri",
        role: "Core Team Member",
        image: "/team/siri.jpg",
        bio: "Siri brings enthusiasm and technical expertise to ROOTRON. She is actively involved in various projects and helps create a collaborative team environment.",
        skills: ["Web Development", "Collaboration", "Innovation", "Communication"],
        achievements: [
            "Active contributor to team projects",
            "Participated in workshops and events",
            "Helped with team coordination",
            "Contributed to technical initiatives"
        ],
        social: {
            linkedin: "https://linkedin.com/in/siri",
            github: "https://github.com/siri",
            email: "siri@rootron.tech"
        }
    },
    {
        id: "prajwal",
        name: "Prajwal",
        role: "Core Team Member",
        image: "/team/prajwal.jpg",
        bio: "Prajwal is a dedicated team member with strong technical skills and a passion for learning. He contributes actively to ROOTRON's projects and initiatives.",
        skills: ["Programming", "Development", "Problem Solving", "Team Collaboration"],
        achievements: [
            "Contributed to technical projects",
            "Participated in hackathons",
            "Assisted in organizing events",
            "Active in coding competitions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/prajwal",
            github: "https://github.com/prajwal",
            email: "prajwal@rootron.tech"
        }
    },
    {
        id: "madhu",
        name: "Madhu",
        role: "Core Team Member",
        image: "/team/madhu.jpg",
        bio: "Madhu is an enthusiastic team member who brings technical expertise and creativity to ROOTRON. He actively participates in various technical domains and projects.",
        skills: ["Development", "Innovation", "Technical Skills", "Teamwork"],
        achievements: [
            "Contributed to multiple projects",
            "Participated in technical competitions",
            "Helped with team initiatives",
            "Recognized for technical contributions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/madhu",
            github: "https://github.com/madhu",
            email: "madhu@rootron.tech"
        }
    },
    {
        id: "azeez",
        name: "Azeez",
        role: "Core Team Member",
        image: "/team/azeez.jpg",
        bio: "Azeez is a skilled developer and active contributor to ROOTRON's technical initiatives. He brings dedication and problem-solving skills to the team.",
        skills: ["Software Development", "Coding", "Algorithms", "Team Collaboration"],
        achievements: [
            "Developed solutions for team projects",
            "Participated in coding events",
            "Contributed to technical discussions",
            "Mentored junior members"
        ],
        social: {
            linkedin: "https://linkedin.com/in/azeez",
            github: "https://github.com/azeez",
            email: "azeez@rootron.tech"
        }
    },
    {
        id: "akshay",
        name: "Akshay",
        role: "Core Team Member",
        image: "/team/akshay.jpg",
        bio: "Akshay is a passionate technologist who contributes to ROOTRON with his technical skills and innovative thinking. He actively participates in various projects and events.",
        skills: ["Programming", "Web Development", "Innovation", "Problem Solving"],
        achievements: [
            "Contributed to web development projects",
            "Participated in hackathons",
            "Helped organize technical events",
            "Active in team activities"
        ],
        social: {
            linkedin: "https://linkedin.com/in/akshay",
            github: "https://github.com/akshay",
            email: "akshay@rootron.tech"
        }
    },
    {
        id: "balaji",
        name: "Balaji",
        role: "Core Team Member",
        image: "/team/balaji.jpg",
        bio: "Balaji brings technical expertise and dedication to ROOTRON. He is actively involved in various technical projects and helps drive the team's success.",
        skills: ["Development", "Technical Skills", "Team Collaboration", "Innovation"],
        achievements: [
            "Contributed to multiple ROOTRON projects",
            "Participated in technical competitions",
            "Assisted in team coordination",
            "Recognized for technical contributions"
        ],
        social: {
            linkedin: "https://linkedin.com/in/balaji",
            github: "https://github.com/balaji",
            email: "balaji@rootron.tech"
        }
    },
    {
        id: "puneet",
        name: "Puneet",
        role: "Core Team Member",
        image: "/team/puneeth.jpg",
        bio: "Puneet is a dedicated team member with strong technical skills and a passion for innovation. He actively contributes to ROOTRON's projects and helps foster a collaborative team environment.",
        skills: ["Programming", "Development", "Problem Solving", "Team Collaboration"],
        achievements: [
            "Contributed to multiple ROOTRON projects",
            "Participated in technical events and competitions",
            "Helped with team coordination and activities",
            "Active in technical discussions and initiatives"
        ],
        social: {
            linkedin: "https://linkedin.com/in/puneet",
            github: "https://github.com/puneet",
            email: "puneet@rootron.tech"
        }
    }
];
