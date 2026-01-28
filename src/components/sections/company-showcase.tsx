"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const LOGO_DEV_PUBLIC_KEY = 'pk_MqjR0loqSS-vHv4z3o9CqQ';

type CompanyLogo = {
	id: number;
	name: string;
	logo?: React.ReactNode;
	domain?: string;
};

type CompanyShowcaseProps = {
	companies?: CompanyLogo[];
	title?: string;
};

function LogoImage({ domain, name }: { domain: string; name: string }) {
	const logoUrl = `https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`;
	const [imageError, setImageError] = useState(false);
	
	if (imageError) {
		return (
			<div className="flex h-12 items-center justify-center">
				<span className="text-sm font-medium text-muted-foreground">{name}</span>
			</div>
		);
	}
	
	return (
		<Image
			src={logoUrl}
			alt={`${name} logo`}
			width={120}
			height={40}
			className="h-auto w-auto max-h-12 object-contain"
			unoptimized
			onError={() => setImageError(true)}
		/>
	);
}

export function CompanyShowcase({ 
	companies, 
	title = "Trusted by fast-growing startups" 
}: CompanyShowcaseProps = {}) {
	const { companyShowcase } = siteConfig;
	const displayCompanies: CompanyLogo[] = companies || (companyShowcase.companyLogos as CompanyLogo[]);
	
	return (
		<section
			id="company"
			className="relative flex w-full flex-col items-center justify-center gap-10 px-6 py-10 pt-20"
		>
			<p className="font-medium text-muted-foreground">
				{title}
			</p>
			<div className="z-20 grid w-full max-w-7xl grid-cols-2 items-center justify-center overflow-hidden border-border border-y md:grid-cols-4">
				{displayCompanies.map((company) => (
					<Link
						href="#"
						className="group relative flex h-28 w-full items-center justify-center p-4 before:absolute before:top-0 before:-left-1 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
						key={company.id}
					>
					<div className="flex h-full w-full translate-y-0 items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:-translate-y-4">
						{company.domain ? (
							<LogoImage domain={company.domain} name={company.name} />
						) : company.logo ? (
							company.logo
						) : (
							<span className="text-sm font-medium text-muted-foreground">{company.name}</span>
						)}
					</div>
						<div className="absolute inset-0 flex translate-y-8 items-center justify-center opacity-0 transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:translate-y-4 group-hover:opacity-100">
							<span className="flex items-center gap-2 font-medium text-sm">
								Learn More <ArrowRight className="h-4 w-4" />
							</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
