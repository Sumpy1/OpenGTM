"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "All" | "PRISMA" | "RESEARCH LAB" | "TRANSFORMER" | "SWAG";

interface Product {
	id: string;
	name: string;
	price: string;
	category: Category[];
	image: string;
}

const products: Product[] = [
	{
		id: "membership",
		name: "Membership",
		price: "$59,000.00",
		category: ["All"],
		image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "prisma-poc",
		name: "PRISMA: POC",
		price: "$199,999.00",
		category: ["All", "PRISMA"],
		image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "prisma-enterprise",
		name: "Prisma: Enterprise",
		price: "$799,999.00",
		category: ["All", "PRISMA"],
		image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "audit-org",
		name: "Audit: Org",
		price: "$99,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "audit-market",
		name: "Audit: Market",
		price: "$99,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "audit-model",
		name: "Audit: Model",
		price: "$99,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "design-org",
		name: "Design: Org",
		price: "$199,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "design-market",
		name: "Design: Market",
		price: "$199,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "design-model",
		name: "Design: Model",
		price: "$199,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "implement-org",
		name: "Implement: Org",
		price: "$299,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "implement-market",
		name: "Implement: Market",
		price: "$299,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "implement-model",
		name: "Implement: Model",
		price: "$299,999.00",
		category: ["All", "TRANSFORMER"],
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "custom-research",
		name: "Custom Research Request",
		price: "$199,999.00",
		category: ["All", "RESEARCH LAB"],
		image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "gtm-eval-teams",
		name: "GTM Eval: Teams",
		price: "$99,999.00",
		category: ["All", "RESEARCH LAB"],
		image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
	{
		id: "gtm-eval-vendor",
		name: "GTM Eval: Vendor",
		price: "$99,999.00",
		category: ["All", "RESEARCH LAB"],
		image: "https://images.unsplash.com/photo-1556761175-5973dc4f14a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
	},
];

const categories: Category[] = ["All", "PRISMA", "RESEARCH LAB", "TRANSFORMER", "SWAG"];

export default function BuyPage() {
	const [selectedCategory, setSelectedCategory] = useState<Category>("All");
	const [addedToCart, setAddedToCart] = useState<Set<string>>(new Set());

	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category.includes(selectedCategory));

	const handleAddToCart = (productId: string) => {
		setAddedToCart((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(productId)) {
				newSet.delete(productId);
			} else {
				newSet.add(productId);
			}
			return newSet;
		});
	};

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
							<div className="absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl overflow-hidden md:h-[800px]">
								<img
									src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
									alt="Hero background"
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/40"></div>
							</div>
						</div>
						<div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-10 pt-32 pb-20">
							<h1 className="text-balance text-center font-medium text-4xl tracking-tighter text-white md:text-5xl lg:text-6xl xl:text-7xl">
								OpenGTM Store
							</h1>
							<p className="text-balance text-center font-medium text-xl text-white leading-relaxed tracking-tight md:text-2xl">
								READY TO ACTIVATE?
							</p>
							<p className="text-balance text-center font-medium text-base text-white leading-relaxed md:text-lg max-w-2xl">
								Explore and purchase GTM intelligence today
							</p>
						</div>
					</div>
				</section>

				{/* GTM + AI IN A BOX Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-8 p-10">
							<div className="flex flex-col gap-4">
								<h2 className="font-semibold text-3xl tracking-tighter text-white md:text-4xl">
									GTM + AI
								</h2>
								<h2 className="font-semibold text-4xl tracking-tighter text-white md:text-5xl">
									IN A BOX
								</h2>
								{/* <h3 className="font-semibold text-2xl tracking-tighter text-white md:text-3xl">
									Buy
								</h3> */}
							</div>
						</div>
					</div>
				</section>

				{/* Categories Section */}
				<section className="relative w-full px-5 md:px-10 py-10">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col gap-4 p-10">
							<p className="text-sm font-medium text-muted-foreground">Categories:</p>
							<div className="flex flex-wrap gap-2">
								{categories.map((category) => (
									<button
										key={category}
										onClick={() => setSelectedCategory(category)}
										className={cn(
											"rounded-full border px-4 py-2 text-sm font-medium transition-colors",
											selectedCategory === category
												? "border-primary bg-primary text-primary-foreground"
												: "border-border bg-background hover:bg-accent",
										)}
									>
										{category}
									</button>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Products Grid */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{filteredProducts.map((product) => {
								const isAdded = addedToCart.has(product.id);
								return (
									<div
										key={product.id}
										className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-4 transition-all hover:shadow-lg"
									>
									{/* Product Image */}
									<div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
										<img
											src={product.image}
											alt={product.name}
											className="h-full w-full object-cover transition-transform group-hover:scale-105"
										/>
									</div>

										{/* Product Info */}
										<div className="flex flex-col gap-2">
											<h3 className="font-semibold text-lg tracking-tighter">
												{product.name}
											</h3>
											<p className="text-lg font-semibold">{product.price}</p>
										</div>

										{/* Add to Cart Button */}
										<Button
											onClick={() => handleAddToCart(product.id)}
											variant={isAdded ? "secondary" : "default"}
											className="w-full rounded-full"
										>
											{isAdded ? "Added!" : "Add To Cart"}
										</Button>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Learn More Section */}
				<section className="relative w-full px-5 md:px-10 py-20">
					<div className="relative mx-5 border-x md:mx-10">
						<div className="flex flex-col items-center gap-8 p-10">
							<h2 className="text-balance text-center font-medium text-3xl tracking-tighter md:text-4xl">
								Learn More About OpenGTM
							</h2>
							<div className="flex flex-col gap-4 md:flex-row">
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/#product">PRISMA</Link>
								</Button>
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/research-lab">Research Lab</Link>
								</Button>
								<Button asChild variant="outline" className="rounded-full">
									<Link href="/ai-gtm-transformation">Transformer</Link>
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
