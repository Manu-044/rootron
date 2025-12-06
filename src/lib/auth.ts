// Simple localStorage-based authentication
export type UserRole = 'admin' | 'member';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

// Demo users for testing
const DEMO_USERS = [
    { id: '1', name: 'Admin User', email: 'admin@rootron.com', password: 'admin123', role: 'admin' as UserRole },
    { id: '2', name: 'Member User', email: 'member@rootron.com', password: 'member123', role: 'member' as UserRole },
];

export const authUtils = {
    // Get current user from localStorage
    getUser: (): User | null => {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            return userStr ? JSON.parse(userStr) : null;
        }
        return null;
    },

    // Set user in localStorage
    setUser: (user: User | null) => {
        if (typeof window !== 'undefined') {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        }
    },

    // Check if user is authenticated
    isAuthenticated: (): boolean => {
        return authUtils.getUser() !== null;
    },

    // Check if user is admin
    isAdmin: (): boolean => {
        const user = authUtils.getUser();
        return user?.role === 'admin';
    },

    // Demo login
    login: async (email: string, password: string): Promise<User | null> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const user = DEMO_USERS.find(u => u.email === email && u.password === password);

        if (user) {
            const { password: _, ...userWithoutPassword } = user;
            authUtils.setUser(userWithoutPassword);
            return userWithoutPassword;
        }

        throw new Error('Invalid email or password');
    },

    // Demo register
    register: async (name: string, email: string, password: string): Promise<User | null> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Check if user already exists
        const exists = DEMO_USERS.some(u => u.email === email);
        if (exists) {
            throw new Error('An account with this email already exists');
        }

        // Create new user
        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            role: 'member',
        };

        authUtils.setUser(newUser);
        return newUser;
    },

    // Logout
    logout: async () => {
        authUtils.setUser(null);
    },
};
