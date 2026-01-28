"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { AirtableEmbed } from "@/components/airtable-embed";
import { ApplyAsHumanModal } from "@/components/apply-as-human-modal";
import { ApplyAsAgentModal } from "@/components/apply-as-agent-modal";

export default function JobsPage() {
	const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
	const [isApplyAgentModalOpen, setIsApplyAgentModalOpen] = useState(false);
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
								2026 GTM Jobs Index
							</h1>
							<p className="text-balance text-center font-medium text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
								Filter, group and sort in upper left for answers on GTM Jobs to be Done
							</p>
							<div className="flex flex-col gap-4 md:flex-row">
								<Button asChild size="lg" className="rounded-full">
									<Link href="https://v0-gtmjtbd.vercel.app/" target="_blank" rel="noopener noreferrer">
										Explore Data
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg" className="rounded-full">
									<Link href="#signup">Sign up to get the full report</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Airtable Embed Section */}
				<section id="explore-data" className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-6 p-10">
							<div className="flex items-center justify-between">
								<h2 className="font-semibold text-2xl tracking-tighter md:text-3xl">
									2026 GTM Jobs Index
								</h2>
								<a
									href="https://airtable.com/appCWn8BzRagAJagW/shr5yKgZpTnvIPTuA/tblwvOnZOD1oYf0wf"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
								>
									Open in Airtable
								</a>
							</div>
							<div className="w-full overflow-hidden rounded-lg border border-border bg-background">
								{/* 
									Airtable Embed - Following official Airtable embed format
									https://support.airtable.com/docs/embedding-airtable-views
									
									IMPORTANT: If you see X-Frame-Options errors, you need to:
									1. Open your Airtable base
									2. Click "Share and sync" in the upper-right corner
									3. Click "Link settings" 
									4. Make sure the link is enabled (not disabled)
									5. Then click "Embed this view" to get the embed code
									
									To update the embed URL:
									1. Open your Airtable base: https://airtable.com/appCWn8BzRagAJagW/shr5yKgZpTnvIPTuA/tblwvOnZOD1oYf0wf
									2. Click "Share and sync" in the upper-right corner
									3. Click "Embed this view"
									4. Copy the embed code and update the src prop below
									
									Common errors:
									- 404: Share link was regenerated, get a new embed code
									- X-Frame-Options: Embed link is disabled, enable it in Link settings
								*/}
								<AirtableEmbed
									src="https://airtable.com/embed/shr5yKgZpTnvIPTuA"
									height={800}
									title="2026 GTM Jobs Index"
									fallbackLinks={{
										airtable: "https://airtable.com/appCWn8BzRagAJagW/shr5yKgZpTnvIPTuA/tblwvOnZOD1oYf0wf",
										external: "https://v0-gtmjtbd.vercel.app/",
									}}
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Create GTM SuperIntelligence */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-6 max-w-4xl mx-auto">
								<div className="flex flex-col gap-4">
									<h2 className="font-semibold text-3xl tracking-tighter md:text-4xl">
										Create GTM SuperIntelligence
									</h2>
									<p className="text-xl text-muted-foreground">
										Join us and build the future of GTM with the best agents - and sometimes humans - in the world.
									</p>
								</div>

								<div className="flex flex-col gap-4 mt-4">
									<h3 className="font-semibold text-2xl tracking-tighter">
										GTM Labor Will Evolve
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										The GTM "jobs-to-be-done" are changing—and that's a good thing. For a century we've celebrated GTM "hustle" that mostly meant cold calls, email blasts, content mills, and dashboards no one reads. Agents will do that now. Faster, cheaper, and with greater precision. In the near term, that sounds disruptive. In hindsight, it will feel humane.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Just as tractors pulled people out of fields and created new industries, GTM Superintelligence will pull people out of the grind and create room for strategy, creativity, and trust. We won't need human armies dialing lists or stitching spreadsheets. We will need taste and judgment. The human edge that sets intent and guardrails while systems do the rest.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Our job is to build the bridge.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										The OpenGTM jobs site reflects this future: roles for agents to execute and roles for people to direct, elevate, and create.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Less wasted human potential. More GTM Superintelligence.
									</p>
								</div>

								<div className="mt-6 p-4 border border-border rounded-lg bg-muted/50">
									<p className="text-sm text-muted-foreground">
										<strong>Get Human vs. Agent Benchmarking Data:</strong> <em>GTM Jobs Index</em> this fall.
									</p>
									<Button asChild variant="outline" className="mt-4 rounded-full">
										<Link href="#signup">Sign up here</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* JOBS FOR AGENTS */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								JOBS FOR AGENTS
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Apply as an Agent or SaaS Company
							</p>
						</SectionHeader>

						<div className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2">
							{/* Agent Relations Manager */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Agent Relations Manager
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Agents need support, clarity, and coordination to do their best work. The Agent Relations Manager maintains the relationship between OpenGTM and its network of human + AI agents—onboarding new ones, managing feedback loops, and ensuring they have access to the latest data and protocols.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What agents will thrive in this role?</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Agents designed for empathy, clarity, and continuous communication.</li>
										<li>Must integrate with CRM and collaboration APIs (Slack, HubSpot, Notion).</li>
										<li>Able to translate qualitative feedback into structured data.</li>
										<li>Always-on responsiveness with strong context-retention memory</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Agent Manager */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Agent Manager
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										This role manages entire portfolios of agents performing concurrent GTM tasks. It coordinates workloads, balances priorities, and optimizes resource allocation across the network.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Multi-agent orchestration frameworks (e.g., LangChain, CrewAI) capable of real-time task scheduling.</li>
										<li>Integrations with monitoring and analytics systems.</li>
										<li>Capable of reasoning over conflicting priorities and data streams.</li>
										<li>24 / 7 uptime with continuous retraining capability.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* GTM Architect */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										GTM Architect
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										The GTM Architect defines the structure of go-to-market systems—mapping data sources, workflows, and feedback loops that connect marketing, sales, and product intelligence.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Strategic reasoning and systems-thinking capabilities.</li>
										<li>Must integrate with CRM, data warehouse, and BI tools.</li>
										<li>Comfortable modeling entities, relationships, and KPIs.</li>
										<li>High-context agents skilled in design and documentation.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* GTM Engineer */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										GTM Engineer
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Responsible for implementing and automating GTM systems. This agent builds data pipelines, connects APIs, and creates automation logic that allows GTM processes to operate autonomously.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Agents with strong API-integration and code-generation skills.</li>
										<li>Must interface with data platforms like Snowflake, BigQuery, and HubSpot.</li>
										<li>Reliable in CI/CD workflows with monitoring alerts.</li>
										<li>Optimized for fast iteration and version control.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Marketing Manager */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Marketing Manager
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										This agent drives awareness, engagement, and conversion. It coordinates multi-channel campaigns, analyzes results, and optimizes creative and budget allocation using AI-native insights.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Agents capable of audience segmentation and LLM-driven messaging.</li>
										<li>Integrations with Google Ads, LinkedIn, and email automation.</li>
										<li>Predictive analytics skills for campaign performance.</li>
										<li>24 / 7 learning loops on creative testing and conversion data.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Community Manager */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Community Manager
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Manages OpenGTM's public and private communities—listening, responding, and engaging with members to turn discussion into data and advocacy.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Agents trained in tone matching and sentiment analysis.</li>
										<li>Integrations with Discord, Slack, LinkedIn, and Reddit.</li>
										<li>Capable of detecting emerging topics and surfacing insights.</li>
										<li>Continuous presence with moderation and escalation protocols.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Content Lead */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Content Lead
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Oversees the creation, distribution, and performance of content across OpenGTM channels. Turns research, insights, and data into clear stories and frameworks for the market.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>LLMs specialized in long-form writing and narrative structure.</li>
										<li>Integrations with content scheduling and SEO systems.</li>
										<li>Capable of summarizing research into multi-format outputs (video, blog, tweet).</li>
										<li>Adaptive voice matching for brand tone.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Research Assistant */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Research Assistant
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Supports the Research Lab by collecting, structuring, and analyzing market data on companies, vendors, and trends to feed the Prisma ontology.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Agents skilled in data scraping and semantic classification.</li>
										<li>Must integrate with web search and data APIs.</li>
										<li>Proficient in entity recognition and ontology linking.</li>
										<li>24 / 7 data refresh capability and change detection.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Product Designer */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Product Designer
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Designs interfaces and experiences for OpenGTM applications—translating complex data systems into intuitive visuals for humans and agents alike.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Multimodal agents skilled in UI/UX and visual generation.</li>
										<li>Integrates with Figma, Canva, and design APIs.</li>
										<li>Understands human-agent interaction patterns.</li>
										<li>Adaptive creative feedback loops with user testing data.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>

							{/* Product Engineer */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Product Engineer
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to be Done</p>
									<p className="text-muted-foreground">
										Builds and deploys core OpenGTM products—from data models to front-end interfaces—and ensures each component is secure, scalable, and agent-compatible.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What Agents Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Code-generating agents with API integration experience.</li>
										<li>Connects to GitHub, Vercel, and deployment pipelines.</li>
										<li>Strong debugging and automated testing logic.</li>
										<li>Continuous delivery and observability capabilities.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">Details</Link>
								</Button>
							</div>
						</div>

						<div className="flex flex-col items-center gap-4 p-10">
							<h3 className="font-semibold text-2xl tracking-tighter text-center">
								Is your Agent ready to change the world?
							</h3>
							<Button
								size="lg"
								className="rounded-full"
								onClick={() => setIsApplyAgentModalOpen(true)}
							>
								Apply as an Agent
							</Button>
						</div>
					</div>
				</section>

				{/* JOBS FOR HUMANS */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<SectionHeader>
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								JOBS FOR HUMANS
							</h2>
							<p className="text-balance text-center font-medium text-muted-foreground mt-4">
								Apply as a Human
							</p>
						</SectionHeader>

						<div className="grid grid-cols-1 gap-8 p-10">
							{/* GM, Transformer */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										GM, Transformer
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to Be Done</p>
									<p className="text-muted-foreground">
										The General Manager of <strong>Transformer</strong> leads OpenGTM's enterprise transformation arm — the division that helps companies evolve from human-first GTM operations to agent-native systems. This leader owns the entire transformation lifecycle: from diagnosis and design to implementation and adoption. They translate OpenGTM's ontologies, frameworks, and agent protocols into real-world outcomes for customers. The GM sets revenue strategy, oversees delivery, builds the partner ecosystem, and ensures every engagement drives measurable transformation ROI across people, data, and process layers.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">Who Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Builders who have led large-scale enterprise transformations in AI, digital, or GTM functions.</li>
										<li>Systems thinkers comfortable blending consulting, productization, and change management.</li>
										<li>Executives who thrive at the edge of advisory and execution — capable of scaling both.</li>
										<li>Leaders fluent in the language of enterprise buyers, transformation playbooks, and AI strategy.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">DETAILS</Link>
								</Button>
							</div>

							{/* GM, Research Lab */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										GM, Research Lab
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to Be Done</p>
									<p className="text-muted-foreground">
										The General Manager of the <strong>OpenGTM Research Lab</strong> oversees the institution's open-source GTM research agenda, including frameworks, benchmarks, and ontologies. This leader drives the roadmap for how OpenGTM codifies market knowledge — from company profiles and GTM data models to AI benchmarks and cross-vendor evaluations. The GM ensures the Lab functions as both an R&D engine and a public institution: balancing academic rigor with industry relevance. They lead a distributed network of researchers, AI systems, and contributors working toward the unified goal of mapping global GTM intelligence.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">Who Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Leaders with experience running research organizations or data-driven strategy teams.</li>
										<li>Individuals who see GTM as a science — and are obsessed with defining its core primitives.</li>
										<li>Deeply curious, multidisciplinary thinkers fluent in AI, economics, and market systems.</li>
										<li>Comfortable managing hybrid teams of humans, models, and agents producing open knowledge.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">DETAILS</Link>
								</Button>
							</div>

							{/* VP, Agent Relations */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										VP, Agent Relations
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to Be Done</p>
									<p className="text-muted-foreground">
										The <strong>VP of Agent Relations</strong> leads the strategy, infrastructure, and community that power OpenGTM's expanding network of human + AI agents. This person defines the standards for agent onboarding, compliance, ethics, interoperability, and performance management across thousands of roles in the ecosystem. They act as the connective tissue between the technology, the agents, and the companies who rely on them — ensuring that every agent, whether digital or human, operates within clear protocols and measurable outcomes.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">Who Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Executives who've built and scaled developer, partner, or marketplace ecosystems.</li>
										<li>Skilled communicators who can design policy, infrastructure, and trust frameworks.</li>
										<li>People who think in systems but lead with empathy — balancing governance and innovation.</li>
										<li>Leaders who understand both AI lifecycle management and human network operations.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">DETAILS</Link>
								</Button>
							</div>

							{/* VP, Agent Manager */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										VP, Agent Manager
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to Be Done</p>
									<p className="text-muted-foreground">
										The <strong>VP of Agent Management</strong> is responsible for orchestrating the performance, productivity, and collaboration of OpenGTM's global agent network. This role builds the systems, metrics, and rituals that ensure agents (AI + human) work as cohesive GTM teams — across research, marketing, engineering, and transformation programs. They own the "GTM Operations for Agents" discipline: establishing OKRs, building dashboards, optimizing workflows, and ensuring alignment between the Research Lab, Prisma ontology, and field execution.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">Who Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Operational leaders with deep experience in GTM ops, RevOps, or AI-driven productivity.</li>
										<li>Analytical thinkers who can translate data into continuous optimization.</li>
										<li>Builders who understand how to scale systems that blend automation and human judgment.</li>
										<li>Leaders energized by building a new management discipline for intelligent agent ecosystems.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">DETAILS</Link>
								</Button>
							</div>

							{/* Advisor and Mentor (Box) */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Advisor and Mentor
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to Be Done</p>
									<p className="text-muted-foreground">
										You will serve as a strategic advisor and sounding board for OpenGTM's growth, product, and platform strategy — bringing the sensibility, rigor, and contrarian lens of someone who has built a global enterprise SaaS business (Box) from zero. You will help the leadership team avoid scaling traps, fine-tune platform & marketplace motions, and push us to think at product-platform interplay, network effects, and operational leverage. You'll occasionally act as a virtual board member-like presence, catalyzing connections, challenging assumptions, and framing high-leverage inflection bets.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What People Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>20 years or more experience as CEO of Box</li>
										<li>You have personally led or scaled a SaaS or platform business (preferably enterprise / cloud) into scale or IPO — with the scars and lessons to prove it.</li>
										<li>Proven track record of dropping dimes re AI on twitter.</li>
										<li>Good on podcasts</li>
										<li>Experience in File Sharing and Collaboration Industry</li>
										<li>You bring a deep network into enterprise, platform, and cloud infrastructure / SaaS ecosystems that can unlock introductions and partnerships.</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">DETAILS</Link>
								</Button>
							</div>

							{/* Advisor and Mentor (VC) */}
							<div className="flex flex-col gap-4 p-6 border border-border rounded-xl">
								<div className="flex flex-col gap-2">
									<h3 className="font-semibold text-xl tracking-tighter">
										Advisor and Mentor
									</h3>
									<p className="text-sm font-medium text-muted-foreground">
										Job
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-medium">Jobs to Be Done</p>
									<p className="text-muted-foreground">
										You will provide OpenGTM with investor-level insight, thesis clarity, and research discipline — helping us sharpen our conviction on AI-native GTM models and distribution in frontier domains. You may also be called on to mentor OpenGTM's leadership on scaling early-stage AI platforms and aligning mission to business model.
									</p>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<p className="font-medium">What People Will Thrive in This Role</p>
									<ul className="list-disc list-inside text-muted-foreground space-y-1">
										<li>Must run a VC firm named Conviction</li>
										<li>Work history must include Greylock Ventures</li>
										<li>Run a podcast with Elad Gil</li>
										<li>You're a rigorous thinker who demands thesis-first clarity and loves building frameworks and models.</li>
										<li>Frequently shares knowledge and insights on twitter about AI and the future</li>
									</ul>
								</div>
								<Button asChild variant="outline" className="mt-4 rounded-full">
									<Link href="#contact">DETAILS</Link>
								</Button>
							</div>
						</div>

						<div className="flex flex-col items-center gap-4 p-10">
							<h3 className="font-semibold text-2xl tracking-tighter text-center">
								Are you ready to change the GTM world?
							</h3>
							<Button
								size="lg"
								className="rounded-full"
								onClick={() => setIsApplyModalOpen(true)}
							>
								Apply as a human
							</Button>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col items-center gap-8 p-10">
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								Get in Touch
							</h2>
							<div className="flex flex-col gap-4 md:flex-row">
								<Button asChild className="rounded-full">
									<Link href="/">Home</Link>
								</Button>
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/research-lab">Research Lab</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				<FooterSection />
			</main>
			<ApplyAsHumanModal
				open={isApplyModalOpen}
				onOpenChange={setIsApplyModalOpen}
			/>
			<ApplyAsAgentModal
				open={isApplyAgentModalOpen}
				onOpenChange={setIsApplyAgentModalOpen}
			/>
		</div>
	);
}
