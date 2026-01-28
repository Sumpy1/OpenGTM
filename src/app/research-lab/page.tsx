import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { CompanyShowcase } from "@/components/sections/company-showcase";
import { siteConfig } from "@/lib/config";

export default function ResearchLabPage() {
	return (
		<div className="relative mx-auto max-w-7xl border-x">
			<div className="absolute top-0 left-6 z-10 block h-full w-px border-border border-l"></div>
			<div className="absolute top-0 right-6 z-10 block h-full w-px border-border border-r"></div>
			<Navbar />
			<main className="flex min-h-screen w-full flex-col items-center justify-center divide-y divide-border">
				{/* Hero Section */}
				<section className="relative w-full">
					<div className="relative flex w-full flex-col items-center px-6">
						<div className="absolute inset-0">
							<div className="absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] md:h-[800px]"></div>
						</div>
						<div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-10 pt-32 pb-20">
							<h1 className="text-balance text-center font-medium text-4xl tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
								OpenGTM Research Lab
							</h1>
							<p className="text-balance text-center font-medium text-xl text-muted-foreground leading-relaxed tracking-tight md:text-2xl">
								Open Sourcing GTM Innovation
							</p>
							<p className="text-balance text-center font-medium text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
								A frontier GTM research lab for the intelligence age. GTM Evals, standards, benchmarks and AI-native analyst research more aligned to the future.
							</p>
							<Button asChild size="lg" className="rounded-full">
								<Link href="#what-we-do">Learn more</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* GTM Evals Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
							<div className="flex flex-col gap-4 p-8 border border-border rounded-xl">
								<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
									<Image
										src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
										alt="GTM Evals for GTM Teams"
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<h2 className="font-semibold text-2xl tracking-tighter">
										GTM Evals for GTM TEAMS
									</h2>
									<p className="text-muted-foreground">
										How does your GTM stack up to AI-native companies?
									</p>
								</div>
								<Button asChild variant="secondary" className="w-fit rounded-full">
									<Link href="#contact">EVAL MY GTM</Link>
								</Button>
							</div>
							<div className="flex flex-col gap-4 p-8 border border-border rounded-xl">
								<div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
									<Image
										src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop&q=80"
										alt="GTM Evals for Vendors"
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<h2 className="font-semibold text-2xl tracking-tighter">
										GTM Evals for VENDORS
									</h2>
									<p className="text-muted-foreground">
										Should buyers choose your GTM product?
									</p>
								</div>
								<Button asChild variant="secondary" className="w-fit rounded-full">
									<Link href="#contact">EVAL MY PRODUCT</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* What We Do Section */}
				<section id="what-we-do" className="relative w-full px-5 md:px-10">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								WHAT WE DO
							</h2>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Frontier GTM Research
								</h3>
								<p className="text-muted-foreground">
									We eval vendors, tools, strategies and humans with AI-native benchmarking.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Open Standards
								</h3>
								<p className="text-muted-foreground">
									Our research is open-source and community-driven, ensuring companies don't get locked into stale reports or legacy analysts.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Compete with Giants, Differently
								</h3>
								<p className="text-muted-foreground">
									Where incumbent analyst firms monetize opacity, OpenGTM Research Lab focused on clarity and speed.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Bridging the Gap Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4 max-w-3xl">
								<h2 className="font-semibold text-3xl tracking-tighter md:text-4xl">
									BRIDGING THE AI + GTM GAP
								</h2>
								<p className="text-lg text-muted-foreground">
									<strong>OpenGTM</strong> is the world's first <strong>independent research lab dedicated to AI-native GTM</strong>. Our research spans the full GTM stack—from AI models and everyday tools to product comparisons and evals.
								</p>
							</div>

							<div className="flex flex-col gap-6 mt-8">
								<h3 className="font-semibold text-xl tracking-tighter">
									RESEARCH CATEGORIES:
								</h3>
								<ul className="flex flex-col gap-4 list-disc list-inside text-muted-foreground">
									<li>
										<strong className="text-primary">Benchmarks & Evals</strong>: industry-leading <strong>GTM Evals for agents and humans</strong> measuring speed, creativity, modalities, effectiveness, ROI and more.
									</li>
									<li>
										<strong className="text-primary">Ontologies and Data Models</strong>: data infrastructure mapping relationships between data (create industry-standard ICP scoring, personas, segmentation, workflows)
									</li>
									<li>
										<strong className="text-primary">Frameworks & Reference Architectures</strong>: open standards, models, and assets to help companies transform faster
									</li>
									<li>
										<strong className="text-primary">Protocols & APIs</strong>: new protocols and standards for interoperability
									</li>
									<li>
										<strong className="text-primary">AI Transformation</strong>: shared frameworks to shift from human-first to agent-first GTM
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Products from OpenGTM Research */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								Products from OpenGTM Research
							</h2>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									GTM Evals
								</h3>
								<div className="flex flex-col gap-3">
									<div>
										<p className="font-medium mb-2">For Vendors</p>
										<p className="text-sm text-muted-foreground">
											Independent benchmarking and evaluations of platforms, agents, strategies—helping vendors validate performance and stand out.
										</p>
									</div>
									<div>
										<p className="font-medium mb-2">For GTM Teams</p>
										<p className="text-sm text-muted-foreground">
											AI + GTM evaluations and benchmarks that compare your performance against peer companies.
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									Open Source Research
								</h3>
								<p className="text-sm text-muted-foreground">
									OpenGTM Members receive benchmarking, evals, GTM datasets, reference architectures and eval harnesses. Reproducible, transparent, and vendor-neutral.
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									Research-as-a-Service
								</h3>
								<p className="text-sm text-muted-foreground">
									Hire OpenGTM as your outsourced research arm to accelerate discovery and break new ground without slowing down.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 p-10">
							<div className="flex flex-row gap-4">
								<Button asChild variant="secondary" className="rounded-full">
									<Link href="#contact">TALK TO US</Link>
								</Button>
								<Button asChild className="rounded-full">
									<Link href="#contact">GET STARTED</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Companies We Focus On */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								Companies We Focus On
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Independent analysis of the most influential AI + GTM companies
							</p>
						</SectionHeader>
						<div className="mt-10">
							<CompanyShowcase 
								companies={siteConfig.aiCompanies.companyLogos}
								title="Leading AI companies transforming GTM"
							/>
						</div>
					</div>
				</section>

				{/* More From OpenGTM */}
				<section id="contact" className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col items-center gap-8 p-10">
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								More From OpenGTM
							</h2>
							<div className="flex flex-col gap-4 md:flex-row">
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/#product">PRISMA</Link>
								</Button>
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/">Home</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				<FooterSection />
			</main>
		</div>
	);
}
