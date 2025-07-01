import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import TechStack from "@/components/tech-stack";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f0f0f3]">
            <Navigation />
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Footer />
        </main>
    );
}
