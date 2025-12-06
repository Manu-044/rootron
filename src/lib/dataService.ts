// Simple localStorage-based data management
export interface Blog {
    id: number | string;
    title: string;
    author: string;
    date: string;
    status: 'Published' | 'Draft';
    content?: string;
    tags?: string[];
    preview?: string;
    image?: string;
}

export interface Project {
    id: number | string;
    name: string;
    domain: string;
    status: 'Active' | 'Completed';
    team: number;
    description?: string;
    image?: string;
    technologies?: string[];
}

export interface Event {
    id: number | string;
    title: string;
    date: string;
    time: string;
    attendees: number;
    description?: string;
    mode?: string;
    image?: string;
    type?: 'upcoming' | 'past';
    link?: string;
}

export interface Member {
    id: number | string;
    name: string;
    email: string;
    role: string;
    domain: string;
    status: 'Active' | 'Inactive' | 'Pending';
    avatar?: string;
    bio?: string;
}

// Blog operations
export const blogService = {
    getAll: async (): Promise<Blog[]> => {
        const data = localStorage.getItem('blogs');
        return data ? JSON.parse(data) : [];
    },

    add: async (blog: Omit<Blog, 'id'>): Promise<Blog> => {
        const blogs = await blogService.getAll();
        const newBlog = { ...blog, id: Date.now() };
        blogs.push(newBlog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        return newBlog;
    },

    update: async (id: number | string, blog: Partial<Blog>): Promise<void> => {
        const blogs = await blogService.getAll();
        const index = blogs.findIndex(b => b.id === id);
        if (index !== -1) {
            blogs[index] = { ...blogs[index], ...blog };
            localStorage.setItem('blogs', JSON.stringify(blogs));
        }
    },

    delete: async (id: number | string): Promise<void> => {
        const blogs = await blogService.getAll();
        const filtered = blogs.filter(b => b.id !== id);
        localStorage.setItem('blogs', JSON.stringify(filtered));
    },
};

// Project operations
export const projectService = {
    getAll: async (): Promise<Project[]> => {
        const data = localStorage.getItem('projects');
        return data ? JSON.parse(data) : [];
    },

    add: async (project: Omit<Project, 'id'>): Promise<Project> => {
        const projects = await projectService.getAll();
        const newProject = { ...project, id: Date.now() };
        projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(projects));
        return newProject;
    },

    update: async (id: number | string, project: Partial<Project>): Promise<void> => {
        const projects = await projectService.getAll();
        const index = projects.findIndex(p => p.id === id);
        if (index !== -1) {
            projects[index] = { ...projects[index], ...project };
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    },

    delete: async (id: number | string): Promise<void> => {
        const projects = await projectService.getAll();
        const filtered = projects.filter(p => p.id !== id);
        localStorage.setItem('projects', JSON.stringify(filtered));
    },
};

// Event operations
export const eventService = {
    getAll: async (): Promise<Event[]> => {
        const data = localStorage.getItem('events');
        return data ? JSON.parse(data) : [];
    },

    add: async (event: Omit<Event, 'id'>): Promise<Event> => {
        const events = await eventService.getAll();
        const newEvent = { ...event, id: Date.now() };
        events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(events));
        return newEvent;
    },

    update: async (id: number | string, event: Partial<Event>): Promise<void> => {
        const events = await eventService.getAll();
        const index = events.findIndex(e => e.id === id);
        if (index !== -1) {
            events[index] = { ...events[index], ...event };
            localStorage.setItem('events', JSON.stringify(events));
        }
    },

    delete: async (id: number | string): Promise<void> => {
        const events = await eventService.getAll();
        const filtered = events.filter(e => e.id !== id);
        localStorage.setItem('events', JSON.stringify(filtered));
    },
};

// Member operations
export const memberService = {
    getAll: async (): Promise<Member[]> => {
        const data = localStorage.getItem('members');
        return data ? JSON.parse(data) : [];
    },

    add: async (member: Omit<Member, 'id'>): Promise<Member> => {
        const members = await memberService.getAll();
        const newMember = { ...member, id: Date.now() };
        members.push(newMember);
        localStorage.setItem('members', JSON.stringify(members));
        return newMember;
    },

    update: async (id: number | string, member: Partial<Member>): Promise<void> => {
        const members = await memberService.getAll();
        const index = members.findIndex(m => m.id === id);
        if (index !== -1) {
            members[index] = { ...members[index], ...member };
            localStorage.setItem('members', JSON.stringify(members));
        }
    },

    delete: async (id: number | string): Promise<void> => {
        const members = await memberService.getAll();
        const filtered = members.filter(m => m.id !== id);
        localStorage.setItem('members', JSON.stringify(filtered));
    },
};
