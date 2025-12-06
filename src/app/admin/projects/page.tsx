"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { projectService, type Project } from "@/lib/dataService";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [formData, setFormData] = useState<{ name: string; domain: string; status: "Active" | "Completed"; team: number }>({
        name: "",
        domain: "",
        status: "Active",
        team: 1
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await projectService.getAll();
                setProjects(data);
            } catch (err) {
                console.error("Failed to load projects", err);
            }
        })();
    }, []);

    const handleAdd = async () => {
        try {
            await projectService.add(formData);
            const data = await projectService.getAll();
            setProjects(data);
            setShowModal(false);
            setFormData({ name: "", domain: "", status: "Active", team: 1 });
        } catch (err) {
            console.error("Failed to add project", err);
        }
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setFormData({ name: project.name, domain: project.domain, status: project.status, team: project.team });
        setShowModal(true);
    };

    const handleUpdate = async () => {
        if (editingProject) {
            try {
                await projectService.update(editingProject.id, formData);
                const data = await projectService.getAll();
                setProjects(data);
                setShowModal(false);
                setEditingProject(null);
                setFormData({ name: "", domain: "", status: "Active", team: 1 });
            } catch (err) {
                console.error("Failed to update project", err);
            }
        }
    };

    const handleDelete = async (id: number | string) => {
        if (confirm("Are you sure you want to delete this project?")) {
            try {
                await projectService.delete(id);
                const data = await projectService.getAll();
                setProjects(data);
            } catch (err) {
                console.error("Failed to delete project", err);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Projects Management</h1>
                    <p className="text-gray-400">Manage team projects and assignments</p>
                </div>
                <Button onClick={() => { setEditingProject(null); setShowModal(true); }}>
                    <Plus size={16} className="mr-2" />
                    New Project
                </Button>
            </div>

            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">All Projects ({projects.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 border-b border-white/10">
                                <tr>
                                    <th className="pb-3 pl-4">Project Name</th>
                                    <th className="pb-3">Domain</th>
                                    <th className="pb-3">Team Size</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3 text-right pr-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {projects.map((project) => (
                                    <tr key={project.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="py-4 pl-4 font-medium text-white">{project.name}</td>
                                        <td className="py-4">{project.domain}</td>
                                        <td className="py-4">{project.team} members</td>
                                        <td className="py-4">
                                            <span className={`px-2 py-1 rounded text-xs ${project.status === "Active"
                                                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                                : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                                                }`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right pr-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(project)}
                                                    className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(project.id)}
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
                                {editingProject ? "Edit Project" : "New Project"}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-300">Project Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Domain</label>
                                <input
                                    type="text"
                                    value={formData.domain}
                                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                    placeholder="e.g., AI/ML, IoT, Web Dev"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Team Size</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={formData.team}
                                    onChange={(e) => setFormData({ ...formData, team: parseInt(e.target.value) })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Completed" })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="flex gap-2 pt-2">
                                <Button onClick={editingProject ? handleUpdate : handleAdd} className="flex-1">
                                    {editingProject ? "Update" : "Create"}
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
