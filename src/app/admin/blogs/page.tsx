"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus, Edit, Trash2, Eye, X } from "lucide-react";
import { blogService, type Blog } from "@/lib/dataService";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
    const [formData, setFormData] = useState<{ title: string; author: string; date: string; status: "Draft" | "Published" }>({
        title: "",
        author: "",
        date: "",
        status: "Draft"
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await blogService.getAll();
                setBlogs(data);
            } catch (err) {
                console.error("Failed to load blogs", err);
            }
        })();
    }, []);

    const handleAdd = async () => {
        try {
            await blogService.add(formData);
            const data = await blogService.getAll();
            setBlogs(data);
            setShowModal(false);
            setFormData({ title: "", author: "", date: "", status: "Draft" });
        } catch (err) {
            console.error("Failed to add blog", err);
        }
    };

    const handleEdit = (blog: Blog) => {
        setEditingBlog(blog);
        setFormData({ title: blog.title, author: blog.author, date: blog.date, status: blog.status });
        setShowModal(true);
    };

    const handleUpdate = async () => {
        if (editingBlog) {
            try {
                await blogService.update(editingBlog.id, formData);
                const data = await blogService.getAll();
                setBlogs(data);
                setShowModal(false);
                setEditingBlog(null);
                setFormData({ title: "", author: "", date: "", status: "Draft" });
            } catch (err) {
                console.error("Failed to update blog", err);
            }
        }
    };

    const handleDelete = async (id: number | string) => {
        if (confirm("Are you sure you want to delete this blog post?")) {
            try {
                await blogService.delete(id);
                const data = await blogService.getAll();
                setBlogs(data);
            } catch (err) {
                console.error("Failed to delete blog", err);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Blog Management</h1>
                    <p className="text-gray-400">Create and manage blog posts</p>
                </div>
                <Button onClick={() => { setEditingBlog(null); setShowModal(true); }}>
                    <Plus size={16} className="mr-2" />
                    New Post
                </Button>
            </div>

            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">All Blog Posts ({blogs.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 border-b border-white/10">
                                <tr>
                                    <th className="pb-3 pl-4">Title</th>
                                    <th className="pb-3">Author</th>
                                    <th className="pb-3">Date</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3 text-right pr-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {blogs.map((blog) => (
                                    <tr key={blog.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="py-4 pl-4 font-medium text-white">{blog.title}</td>
                                        <td className="py-4">{blog.author}</td>
                                        <td className="py-4">{blog.date}</td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded text-xs ${blog.status === "Published"
                                                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                                : "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                                                }`}>
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right pr-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(blog)}
                                                    className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                    className="p-2 hover:bg-red-500/10 rounded text-gray-400 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-secondary border border-white/10 rounded-xl p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-white">
                                {editingBlog ? "Edit Blog Post" : "New Blog Post"}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-300">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Author</label>
                                <input
                                    type="text"
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Date</label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value as "Published" | "Draft" })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                >
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                </select>
                            </div>
                            <div className="flex gap-2 pt-2">
                                <Button onClick={editingBlog ? handleUpdate : handleAdd} className="flex-1">
                                    {editingBlog ? "Update" : "Create"}
                                </Button>
                                <Button onClick={() => setShowModal(false)} variant="outline" className="flex-1">
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
