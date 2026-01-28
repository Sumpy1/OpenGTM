import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export default function TransformerPage() {
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
								BUILD AI-NATIVE GTM. FAST.
							</h1>
							<p className="text-balance text-center font-medium text-xl text-muted-foreground leading-relaxed tracking-tight md:text-2xl">
								Transform Your GTM Before GTM Transforms You.
							</p>
							<p className="text-balance text-center font-medium text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
								AI is no longer an experiment. It's the brain for GTM and your future workforce.
							</p>
							<p className="text-balance text-center font-medium text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
								Tranformer helps orgs manage this shift.
							</p>
							<div className="flex flex-col gap-4 md:flex-row">
								<Button asChild size="lg" className="rounded-full">
									<Link href="#contact">GET YOUR AI-NATIVE GTM AUDIT</Link>
								</Button>
								<Button asChild size="lg" variant="secondary" className="rounded-full">
									<Link href="#contact">GET STARTED</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Introduction Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4 max-w-3xl">
								<p className="text-lg text-muted-foreground">
									As AI replaces humans in GTM, the result is not just about lowering costs. It's a reboot for how GTM works.
								</p>
								<p className="text-lg text-muted-foreground">
									<strong>Transformer</strong> is the movement to help companies harness both, building AI-native GTM systems that are agent-first and future-proof.
								</p>
								<p className="text-lg text-muted-foreground">
									We design and implement new protocols, new roles, and new rules so GTM teams can shift from low value work to strategic impact.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* How We Help Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								HOW WE HELP
							</h2>
						</SectionHeader>
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-4">
								<h3 className="font-semibold text-xl tracking-tighter">
									ORG
								</h3>
								<p className="text-muted-foreground">
									Reimagine GTM around AI. Agent management, AI infrastructure and new roles for humans.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="font-semibold text-xl tracking-tighter">
									MARKET
								</h3>
								<p className="text-muted-foreground">
									Turn GTM into code. One unified view for market, targeting, personas, products, content, campaigns
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<h3 className="font-semibold text-xl tracking-tighter">
									MODEL
								</h3>
								<p className="text-muted-foreground">
									New Infrastructure. Data ontology to align agents, process & systems into machine-readable GTM
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Features Grid Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3">
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									TRANSFORM YOUR ORG AROUND AI
								</h3>
								<p className="text-sm text-muted-foreground">
									Shift from human-first workflows to agent-native operations. OpenGTM helps leaders redesign structures, incentives, and decision-systems around AI—turning GTM, product, and data teams into continuous learners that adapt and deploy at machine speed.
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									DEPLOY EVERYDAY TOOLS
								</h3>
								<p className="text-sm text-muted-foreground">
									Bring AI into the systems your teams already use. From CRM to Notion to your data warehouse, we integrate foundational agents that enhance daily decisions, automate workflows, and surface insights across every layer of your stack.
								</p>
							</div>
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<h3 className="font-semibold text-xl tracking-tighter">
									AGENT RELATIONS
								</h3>
								<p className="text-sm text-muted-foreground">
									The new competitive advantage is how your humans and agents collaborate. We help organizations define, train, and govern their agent ecosystem—building trust, accountability, and shared intelligence between people and machines.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Our Approach Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								Our Approach
							</h2>
						</SectionHeader>
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4 max-w-3xl">
								<p className="text-lg text-muted-foreground">
									For Transformer members, AI is more than a cost lever. It is a chance to rebuild how GTM works. AI as an engine for growth and a solution to broken GTM. Every transformation is different, shaped by your company's market and goals.
								</p>
								<p className="text-lg text-muted-foreground">
									That's why we don't treat AI as a black box.
								</p>
								<p className="text-lg text-muted-foreground">
									We model your GTM in PRISMA, run Evals to benchmark your GTM jobs, then redesign how marketing, sales, and ops operate. To make the Transformer movement stick, we follow the 10-20-70 principle—10% RLHF and fine tuning, 20% people and process. 70% data and agents.
								</p>
								<p className="text-lg text-muted-foreground">
									New roles, new incentives, and new adoption paths.
								</p>
								<p className="text-lg text-muted-foreground">
									Together, they give you the GTM architecture to scale with confidence.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Why Transformer Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4 max-w-3xl">
								<h2 className="font-semibold text-3xl tracking-tighter md:text-4xl">
									Why Transformer?
								</h2>
								<p className="text-lg text-muted-foreground">
									<strong>Transformer</strong> is the world's #1 AI-native transformation program for GTM.
								</p>
								<p className="text-lg text-muted-foreground">
									We've helped the best companies in the world re-invent their GTM around AI.
								</p>
								<p className="text-lg font-semibold">
									WE CAN HELP YOU TOO.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section id="contact" className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col items-center gap-8 p-10">
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								LET'S TALK
							</h2>
							<p className="text-balance text-center font-medium text-lg text-muted-foreground">
								Make a bet on AI-first GTM
							</p>
							<div className="flex flex-col gap-4 md:flex-row">
								<Button asChild size="lg" className="rounded-full">
									<Link href="#contact">GET YOUR AI-NATIVE GTM AUDIT</Link>
								</Button>
								<Button asChild size="lg" variant="secondary" className="rounded-full">
									<Link href="#contact">GET STARTED</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* More From OpenGTM */}
				<section className="relative w-full px-5 md:px-10 py-20">
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
									<Link href="/research-lab">Research Lab</Link>
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
