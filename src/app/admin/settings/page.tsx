"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { settingsService, type SiteSettings } from "@/lib/settingsService";
import { Save, RotateCcw } from "lucide-react";

export default function SettingsPage() {
    const [settings, setSettings] = useState<SiteSettings>(settingsService.get());
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setSettings(settingsService.get());
    }, []);

    const handleSave = () => {
        settingsService.save(settings);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
        alert("✅ Settings saved successfully! Refresh any page to see the changes.");
    };

    const handleReset = () => {
        if (confirm("Are you sure you want to reset all settings to default?")) {
            settingsService.reset();
            setSettings(settingsService.get());
            alert("Settings reset to default values!");
        }
    };

    return (
        <div className="space-y-6 pb-10">
            <div className="flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur-sm z-10 py-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Site Settings</h1>
                    <p className="text-gray-400">Control all content across the website</p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={handleReset} variant="outline">
                        <RotateCcw size={16} className="mr-2" />
                        Reset
                    </Button>
                    <Button onClick={handleSave} className={saved ? "bg-green-600" : ""}>
                        <Save size={16} className="mr-2" />
                        {saved ? "✓ Saved!" : "Save All"}
                    </Button>
                </div>
            </div>

            {/* General Settings */}
            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Site Name</label>
                            <input
                                type="text"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Contact Email</label>
                            <input
                                type="email"
                                value={settings.contactEmail}
                                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Site Description</label>
                        <input
                            type="text"
                            value={settings.siteDescription}
                            onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Homepage */}
            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">Homepage Hero Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Hero Title (Badge)</label>
                        <input
                            type="text"
                            value={settings.heroTitle}
                            onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Hero Subtitle</label>
                        <textarea
                            value={settings.heroSubtitle}
                            onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            rows={3}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* About Page */}
            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">About Page</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Page Title</label>
                        <input
                            type="text"
                            value={settings.aboutTitle}
                            onChange={(e) => setSettings({ ...settings, aboutTitle: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Introduction</label>
                        <textarea
                            value={settings.aboutIntro}
                            onChange={(e) => setSettings({ ...settings, aboutIntro: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            rows={2}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Mission Statement</label>
                        <textarea
                            value={settings.aboutMission}
                            onChange={(e) => setSettings({ ...settings, aboutMission: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            rows={2}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Vision Statement</label>
                        <textarea
                            value={settings.aboutVision}
                            onChange={(e) => setSettings({ ...settings, aboutVision: e.target.value })}
                            className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            rows={2}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Page Titles */}
            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">Page Titles & Subtitles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Domains Title</label>
                            <input
                                type="text"
                                value={settings.domainsTitle}
                                onChange={(e) => setSettings({ ...settings, domainsTitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Domains Subtitle</label>
                            <input
                                type="text"
                                value={settings.domainsSubtitle}
                                onChange={(e) => setSettings({ ...settings, domainsSubtitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Projects Title</label>
                            <input
                                type="text"
                                value={settings.projectsTitle}
                                onChange={(e) => setSettings({ ...settings, projectsTitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Projects Subtitle</label>
                            <input
                                type="text"
                                value={settings.projectsSubtitle}
                                onChange={(e) => setSettings({ ...settings, projectsSubtitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Events Title</label>
                            <input
                                type="text"
                                value={settings.eventsTitle}
                                onChange={(e) => setSettings({ ...settings, eventsTitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Events Subtitle</label>
                            <input
                                type="text"
                                value={settings.eventsSubtitle}
                                onChange={(e) => setSettings({ ...settings, eventsSubtitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Blog Title</label>
                            <input
                                type="text"
                                value={settings.blogTitle}
                                onChange={(e) => setSettings({ ...settings, blogTitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Blog Subtitle</label>
                            <input
                                type="text"
                                value={settings.blogSubtitle}
                                onChange={(e) => setSettings({ ...settings, blogSubtitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Contact Page */}
            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">Contact Page</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Contact Title</label>
                            <input
                                type="text"
                                value={settings.contactTitle}
                                onChange={(e) => setSettings({ ...settings, contactTitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Contact Subtitle</label>
                            <input
                                type="text"
                                value={settings.contactSubtitle}
                                onChange={(e) => setSettings({ ...settings, contactSubtitle: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Address</label>
                            <input
                                type="text"
                                value={settings.contactAddress}
                                onChange={(e) => setSettings({ ...settings, contactAddress: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Phone</label>
                            <input
                                type="text"
                                value={settings.contactPhone}
                                onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-secondary/40 border-white/5">
                <CardHeader>
                    <CardTitle className="text-white">Social Media Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">GitHub URL</label>
                            <input
                                type="url"
                                value={settings.socialLinks.github || ""}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    socialLinks: { ...settings.socialLinks, github: e.target.value }
                                })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                                placeholder="https://github.com/yourorg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">LinkedIn URL</label>
                            <input
                                type="url"
                                value={settings.socialLinks.linkedin || ""}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    socialLinks: { ...settings.socialLinks, linkedin: e.target.value }
                                })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                                placeholder="https://linkedin.com/company/yourorg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Twitter URL</label>
                            <input
                                type="url"
                                value={settings.socialLinks.twitter || ""}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    socialLinks: { ...settings.socialLinks, twitter: e.target.value }
                                })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                                placeholder="https://twitter.com/yourorg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Instagram URL</label>
                            <input
                                type="url"
                                value={settings.socialLinks.instagram || ""}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    socialLinks: { ...settings.socialLinks, instagram: e.target.value }
                                })}
                                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-2 text-white"
                                placeholder="https://instagram.com/yourorg"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button at Bottom */}
            <div className="flex justify-end gap-2 sticky bottom-0 bg-background/95 backdrop-blur-sm py-4">
                <Button onClick={handleReset} variant="outline">
                    <RotateCcw size={16} className="mr-2" />
                    Reset to Default
                </Button>
                <Button onClick={handleSave} className={saved ? "bg-green-600" : ""}>
                    <Save size={16} className="mr-2" />
                    {saved ? "✓ Saved Successfully!" : "Save All Changes"}
                </Button>
            </div>
        </div>
    );
}
