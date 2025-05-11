import Button from "@/src/components/Button"
import { Container } from "@/src/components/Container"
import JobFeatureCard from "@/src/components/JobFeatureCard"

const page = () => {
    return (
        <main>
            <section className="py-6 md:py-16">
                <Container>
                    <div className="mb-9">
                        <h1 className="mb-2 md:text-5xl text-center text-2xl font-ibm-plex-mono font-bold text-black">
                            Featured Jobs for XYZ
                        </h1>
                        <p className="md:text-lg text-center font-inter text-xs text-tertiary-dark mb-9">Personalized job matches, real HR connections, and no time wasted - just the<br className="hidden md:block"/> right opportunities for you.</p>
                        <div className="flex justify-center">
                            <Button type="button" className="mt-4 h-8 px-4 md:h-14 md:px-6">Get Curated Jobs</Button>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-wrap justify-center gap-6">
                            <li><JobFeatureCard /></li>
                            <li><JobFeatureCard /></li>
                            <li><JobFeatureCard /></li>
                            <li><JobFeatureCard /></li>
                            <li><JobFeatureCard /></li>
                            <li><JobFeatureCard /></li>
                        </ul>
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default page