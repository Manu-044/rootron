import { events } from "@/data/events";
import EventCard from "@/components/sections/events/EventCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function EventsPage() {
    const upcomingEvents = events.filter((e) => e.type === "upcoming");
    const pastEvents = events.filter((e) => e.type === "past");

    return (
        <div className="pt-20">
            <div className="bg-secondary/20 py-16 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    Events & <span className="text-primary">Workshops</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                    Join us for hands-on workshops, hackathons, and tech talks. Learn, compete, and grow with the community.
                </p>
            </div>

            <SectionWrapper>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-8 border-l-4 border-primary pl-4">
                    Upcoming Events
                </h2>
                {upcomingEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mb-16">No upcoming events at the moment. Stay tuned!</p>
                )}

                <h2 className="text-3xl font-orbitron font-bold text-white mb-8 border-l-4 border-accent-red pl-4">
                    Past Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
