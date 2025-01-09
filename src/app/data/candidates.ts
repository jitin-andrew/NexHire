export interface Candidate {
    id: string;
    name: string;
    avatar: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    company: string;
    education: {
      degree: string;
      school: string;
      years: string;
    };
    skills: string[];
    conversations: {
      id: string;
      sender: string;
      senderAvatar: string;
      message: string;
      timestamp: string;
    }[];
    timeline: {
      title: string;
      date: string;
      status: 'completed' | 'current' | 'pending';
    }[];
    tasks: {
      id: string;
      title: string;
      assignee: string;
      due: string;
      status: 'pending' | 'completed';
    }[];
  }
  
  export const candidates: Candidate[] = [
    {
      id: '1',
      name: 'Sarah Connor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      role: 'Senior Software Engineer',
      email: 'sarah.connor@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      company: 'Cyberdyne Systems',
      education: {
        degree: 'Master of Computer Science',
        school: 'Stanford University',
        years: '2018-2020'
      },
      skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'System Design'],
      conversations: [
        {
          id: '1',
          sender: 'John Doe',
          senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
          message: 'Great interview session today! Looking forward to the next steps.',
          timestamp: '2 hours ago'
        }
      ],
      timeline: [
        { title: 'Application Received', date: 'Jan 15, 2024', status: 'completed' },
        { title: 'Initial Screening', date: 'Jan 18, 2024', status: 'completed' },
        { title: 'Technical Interview', date: 'Jan 22, 2024', status: 'completed' },
        { title: 'Team Interview', date: 'Jan 25, 2024', status: 'current' },
        { title: 'Final Decision', date: 'Scheduled', status: 'pending' }
      ],
      tasks: [
        { id: '1', title: 'Review Portfolio', assignee: 'John Doe', due: 'Tomorrow', status: 'pending' },
        { id: '2', title: 'Schedule Technical Interview', assignee: 'Sarah Smith', due: 'In 2 days', status: 'pending' }
      ]
    },
    {
      id: '2',
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      role: 'Product Designer',
      email: 'alex.chen@email.com',
      phone: '+1 (555) 234-5678',
      location: 'New York, NY',
      company: 'Design Co',
      education: {
        degree: 'BFA in Interactive Design',
        school: 'Parsons School of Design',
        years: '2016-2020'
      },
      skills: ['UI/UX', 'Figma', 'Adobe Suite', 'Design Systems', 'Prototyping'],
      conversations: [],
      timeline: [
        { title: 'Application Received', date: 'Jan 20, 2024', status: 'completed' },
        { title: 'Portfolio Review', date: 'Jan 23, 2024', status: 'current' },
        { title: 'Design Challenge', date: 'Scheduled', status: 'pending' }
      ],
      tasks: []
    },
    {
      id: '3',
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      role: 'Data Scientist',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 345-6789',
      location: 'Austin, TX',
      company: 'Data Analytics Inc',
      education: {
        degree: 'PhD in Statistics',
        school: 'MIT',
        years: '2017-2022'
      },
      skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Deep Learning'],
      conversations: [],
      timeline: [
        { title: 'Application Received', date: 'Jan 18, 2024', status: 'completed' },
        { title: 'Technical Assessment', date: 'Scheduled', status: 'pending' }
      ],
      tasks: []
    },
    {
      id: '4',
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      role: 'DevOps Engineer',
      email: 'james.wilson@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Seattle, WA',
      company: 'Cloud Systems LLC',
      education: {
        degree: 'BS in Computer Engineering',
        school: 'University of Washington',
        years: '2015-2019'
      },
      skills: ['Kubernetes', 'Docker', 'AWS', 'CI/CD', 'Terraform'],
      conversations: [],
      timeline: [
        { title: 'Application Received', date: 'Jan 22, 2024', status: 'completed' },
        { title: 'Technical Screen', date: 'Jan 24, 2024', status: 'current' }
      ],
      tasks: []
    },
    {
      id: '5',
      name: 'Emily Brown',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      role: 'Frontend Developer',
      email: 'emily.brown@email.com',
      phone: '+1 (555) 567-8901',
      location: 'Portland, OR',
      company: 'Web Solutions Inc',
      education: {
        degree: 'BS in Computer Science',
        school: 'Oregon State University',
        years: '2017-2021'
      },
      skills: ['React', 'Vue.js', 'CSS', 'JavaScript', 'Accessibility'],
      conversations: [],
      timeline: [
        { title: 'Application Received', date: 'Jan 21, 2024', status: 'completed' },
        { title: 'Code Challenge', date: 'Scheduled', status: 'pending' }
      ],
      tasks: []
    },
    {
        id: '6',
        name: 'Anupam Krishna',
        avatar: 'https://media.licdn.com/dms/image/v2/D5603AQE5b_cDS9OEdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708710419646?e=2147483647&v=beta&t=KTWgU9u20beM4_-ipOopFmPYnrCrS6Wrx7OCtRC8eLE',
        role: 'Gen AI Developer',
        email: 'anupamkris13262@email.com',
        phone: '+1 (555) 567-8901',
        location: 'Avadi, IND',
        company: 'Abex Solutions Inc',
        education: {
          degree: 'B.Tech in AI Data Science',
          school: 'Anna University',
          years: '2020-2024'
        },
        skills: ['React', 'Vue.js', 'CSS', 'JavaScript', 'Accessibility'],
        conversations: [],
        timeline: [
          { title: 'Application Received', date: 'Jan 21, 2024', status: 'completed' },
          { title: 'Code Challenge', date: 'Scheduled', status: 'pending' }
        ],
        tasks: []
      }
  ];