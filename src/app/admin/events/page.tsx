"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { eventService, type Event } from "@/lib/dataService";

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [formData, setFormData] = useState({ title: "", date: "", time: "", attendees: 0 });

    useEffect(() => {
        (async () => {
            try {
                const data = await eventService.getAll();
                setEvents(data);
            } catch (err) {
                console.error("Failed to load events", err);
            }
        })();
    }, []);

    const handleAdd = async () => {
        try {
            await eventService.add(formData);
            const data = await eventService.getAll();
            setEvents(data);
            setShowModal(false);
            setFormData({ title: "", date: "", time: "", attendees: 0 });
        } catch (err) {
            console.error("Failed to add event", err);
        }
    };

    const handleEdit = (event: Event) => {
        setEditingEvent(event);
        setFormData({ title: event.title, date: event.date, time: event.time, attendees: event.attendees });
        setShowModal(true);
    };

    const handleUpdate = async () => {
        if (editingEvent) {
            try {
                await eventService.update(editingEvent.id, formData);
                const data = await eventService.getAll();
                setEvents(data);
                setShowModal(false);
                setEditingEvent(null);
                setFormData({ title: "", date: "", time: "", attendees: 0 });
            } catch (err) {
                console.error("Failed to update event", err);
            }
        }
    };

    const handleDelete = async (id: number | string) => {
        if (confirm("Are you sure you want to delete this event?")) {
            try {
                await eventService.delete(id);
                const data = await eventService.getAll();
                setEvents(data);
            } catch (err) {
                console.error("Failed to delete event", err);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Events Management</h1>
                    <p className="text-gray-400">Create and manage events</p>
                </div>
                <Button onClick={() => { setEditingEvent(null); setShowModal(true); }}>
                    <Plus size={16} className="mr-2" />
                    New Event
                </Button>
            </div>

            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">Upcoming Events ({events.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 border-b border-white/10">
                                <tr>
                                    <th className="pb-3 pl-4">Event Title</th>
                                    <th className="pb-3">Date</th>
                                    <th className="pb-3">Time</th>
                                    <th className="pb-3">Attendees</th>
                                    <th className="pb-3 text-right pr-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {events.map((event) => (
                                    <tr key={event.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="py-4 pl-4 font-medium text-white">{event.title}</td>
                                        <td className="py-4">{event.date}</td>
                                        <td className="py-4">{event.time}</td>
                                        <td className="py-4">{event.attendees} registered</td>
                                        <td className="py-4 text-right pr-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(event)}
                                                    className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Edit size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(event.id)}
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
                                {editingEvent ? "Edit Event" : "New Event"}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-300">Event Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                                <label className="text-sm font-medium text-gray-300">Time</label>
                                <input
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Expected Attendees</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={formData.attendees}
                                    onChange={(e) => setFormData({ ...formData, attendees: parseInt(e.target.value) })}
                                    className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white mt-1"
                                />
                            </div>
                            <div className="flex gap-2 pt-2">
                                <Button onClick={editingEvent ? handleUpdate : handleAdd} className="flex-1">
                                    {editingEvent ? "Update" : "Create"}
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
