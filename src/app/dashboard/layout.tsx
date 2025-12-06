import MemberHeader from "@/components/member/MemberHeader";
import MemberSidebar from "@/components/member/MemberSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">
            <MemberSidebar />
            <div className="flex-1 flex flex-col">
                <MemberHeader />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
