import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export default function PrismaPage() {
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
								PRISMA
							</h1>
							<p className="text-balance text-center font-medium text-xl text-muted-foreground leading-relaxed tracking-tight md:text-2xl">
								AUTOCOMPLETE FOR GTM
							</p>
							<p className="text-balance text-center font-medium text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
								PRISMA is the operational ontology for sales and marketing.
							</p>
							<Button asChild size="lg" className="rounded-full">
								<Link href="#how-it-works">GET STARTED</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* The First AI-Native GTM Ontology */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4 max-w-3xl mx-auto text-center">
								<h2 className="font-semibold text-3xl tracking-tighter md:text-4xl">
									The First AI-Native GTM Ontology
								</h2>
								<p className="text-lg text-muted-foreground">
									Our machine-readable data model unifies every element of your GTM. By pre-computing your GTM to every company, PRISMA transforms revenue growth from human art into AI-native science.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ONTOLOGY and DATA MODEL */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								ONTOLOGY and DATA MODEL
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Encode your ICPs, personas, offers, content and workflows into a unified model
							</p>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									GTM Data Ontology
								</h3>
								<p className="text-muted-foreground">
									Define every GTM concept: ICPs, personas, offers, and workflows — within a structured, interoperable schema that powers AI-native reasoning.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Unified Data Model
								</h3>
								<p className="text-muted-foreground">
									Fuse fragmented GTM data across systems into a single model that learns relationships, context, and performance over time.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Mixture of Experts
								</h3>
								<p className="text-muted-foreground">
									Distribute intelligence across specialized models — aligning human expertise, AI models, and data layers into one adaptive GTM brain.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* PROFILES */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								PROFILES
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Digital twin of company buyers and sellers: adaptive, machine-readable, always on
							</p>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Seller Profiles
								</h3>
								<p className="text-muted-foreground">
									Capture dynamic representations of every GTM: continuously update context across touchpoints — intent, firmographics, behavior — creating adaptive digital twins of your ideal customers.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Buyer Profiles
								</h3>
								<p className="text-muted-foreground">
									Map initiatives, intent, and engagement data into agent-ready records that adapt in real time.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Governance and Audit
								</h3>
								<p className="text-muted-foreground">
									Track lineage, compliance, and change history across all GTM data chains — ensuring integrity, trust, and explainability for AI systems.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* PROTOCOLS */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								PROTOCOLS
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Open standards that replace brittle playbooks with interoperable GTM logic.
							</p>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									New GTM Rails
								</h3>
								<p className="text-muted-foreground">
									Rebuild GTM infrastructure around open protocols: shared schemas that let sales, marketing, and Ops speak the same language. This enables coordination between agents, humans, and systems.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Unified API
								</h3>
								<p className="text-muted-foreground">
									Expose GTM data, insights, and actions through a single programmable layer that powers interoperability across your tech stack.
								</p>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-semibold text-xl tracking-tighter">
									Open Source
								</h3>
								<p className="text-muted-foreground">
									Collaborate through shared GTM standards — open, extensible frameworks that evolve with the ecosystem and allow for community updates.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 p-10">
							<Button asChild size="lg" className="rounded-full">
								<Link href="#contact">Get Started</Link>
							</Button>
							<Button asChild variant="outline" className="rounded-full">
								<Link href="#use-cases">Find a Use Case →</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* HOW IT WORKS */}
				<section id="how-it-works" className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								HOW IT WORKS
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4 max-w-3xl mx-auto">
								A live semantic data model that unifies your GTM "nouns" (accounts, signals, channels) and "verbs" (campaigns, offers, outreach), and let's agents act with policy and audit.
							</p>
						</SectionHeader>
					</div>
				</section>

				{/* HOW A COMPANY USES PRISMA */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								HOW A COMPANY USES PRISMA
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Take your existing human GTM process and turn it into code
							</p>
						</SectionHeader>
					</div>
				</section>

				{/* USE CASES */}
				<section id="use-cases" className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								USE CASES
							</h2>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									MARKET GRAPH
								</h3>
								<p className="text-muted-foreground">
									Map the GTM landscape: identify demand patterns, segments, and signals across markets
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									ACTIONS
								</h3>
								<p className="text-muted-foreground">
									Design adaptive GTM plays: orchestrated actions that align humans, agents, and data for impact.
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									INFERENCE
								</h3>
								<p className="text-muted-foreground">
									Turns fragmented GTM data into a unified intelligence layer: maps relationships, connects systems, reveals patterns.
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									SCORING
								</h3>
								<p className="text-muted-foreground">
									Quantify fit, intent, and readiness using PRISMA's industry standardized models that continuously learn
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									OFFERS
								</h3>
								<p className="text-muted-foreground">
									Build differentiated value: architect modular offers that evolve with context
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									WORKFLOW
								</h3>
								<p className="text-muted-foreground">
									Unify GTM execution: automate, measure, and audit the flow of data actions from signal to sale
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 p-10">
							<Button asChild size="lg" className="rounded-full">
								<Link href="#contact">Get Started</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* About OpenGTM */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4 max-w-3xl">
								<h2 className="font-semibold text-3xl tracking-tighter md:text-4xl">
									About OpenGTM
								</h2>
								<p className="text-lg text-muted-foreground">
									<strong>OpenGTM</strong> is an AI + GTM Research Lab behind <strong>PRISMA</strong>, the first AI-native ontology for GTM. <strong>PRISMA</strong> turns fragmented GTM motions into codified, agent-ready infrastructure.
								</p>
								<p className="text-lg text-muted-foreground">
									Our work spans <strong>PRISMA</strong>, the ontology backbone; our <strong>Research Lab</strong>, where new standards and benchmarks are forged; and <strong>Transformer</strong>, guiding enterprises into the GTM SuperIntelligence era.
								</p>
							</div>
							<div className="flex flex-col items-start gap-4">
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/research-lab">LEARN MORE</Link>
								</Button>
							</div>
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
									<Link href="/research-lab">Research Lab</Link>
								</Button>
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/">Home</Link>
								</Button>
							</div>
							<div className="flex flex-col gap-4 md:flex-row mt-4">
								<Button asChild className="rounded-full">
									<Link href="#contact">TALK TO US</Link>
								</Button>
								<Button asChild variant="secondary" className="rounded-full">
									<Link href="#contact">GET STARTED</Link>
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
