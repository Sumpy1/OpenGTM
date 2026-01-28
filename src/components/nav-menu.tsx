"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

interface NavItem {
	name: string;
	href: string;
}

const navs: NavItem[] = siteConfig.nav.links;

export function NavMenu() {
	const pathname = usePathname();
	const ref = useRef<HTMLUListElement>(null);
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);
	const [isReady, setIsReady] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");
	const [isManualScroll, setIsManualScroll] = useState(false);

	// Find active item based on pathname or scroll position
	const activeItemHref = useMemo(() => {
		// First, check if current pathname matches any nav item
		const pathMatch = navs.find((item) => {
			if (item.href.startsWith("#")) return false;
			return pathname === item.href;
		});

		if (pathMatch) {
			return pathMatch.href;
		}

		// If on home page, check scroll position for hash links
		if (pathname === "/") {
			const hashItems = navs.filter((item) => item.href.startsWith("#"));
			if (hashItems.length > 0) {
				// Return the hash item matching activeSection, or first hash item as default
				const matchingHash = hashItems.find((item) => {
					const sectionId = item.href.substring(1);
					return activeSection === sectionId;
				});
				return matchingHash?.href || hashItems[0].href;
			}
			// If on home page and no hash links, return null to prevent pill from showing
			return null;
		}

		// If no match found, return null to prevent pill from showing
		return null;
	}, [pathname, activeSection]);

	React.useEffect(() => {
		// Update pill position based on active item
		const updatePillPosition = () => {
			// If no active item, hide the pill
			if (!activeItemHref) {
				setIsReady(false);
				return;
			}

			const activeNavItem = ref.current?.querySelector(
				`[href="${activeItemHref}"]`,
			)?.parentElement;
			
			if (activeNavItem) {
				const rect = activeNavItem.getBoundingClientRect();
				setLeft(activeNavItem.offsetLeft);
				setWidth(rect.width);
				setIsReady(true);
			} else {
				// No active item found, hide the pill
				setIsReady(false);
			}
		};

		// Small delay to ensure DOM is ready
		const timeoutId = setTimeout(updatePillPosition, 0);
		return () => clearTimeout(timeoutId);
	}, [activeItemHref]);

	React.useEffect(() => {
		// Only handle scroll-based active state on home page
		if (pathname !== "/") return;

		const handleScroll = () => {
			// Skip scroll handling during manual click scrolling
			if (isManualScroll) return;

			const hashItems = navs.filter((item) => item.href.startsWith("#"));
			
			// If no hash items exist, don't update pill position
			if (hashItems.length === 0) {
				setIsReady(false);
				return;
			}

			const sections = hashItems.map((item) => item.href.substring(1));

			// Find the section closest to viewport top
			let closestSection = sections[0];
			let minDistance = Infinity;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					const distance = Math.abs(rect.top - 100); // Offset by 100px to trigger earlier
					if (distance < minDistance) {
						minDistance = distance;
						closestSection = section;
					}
				}
			}

			// Update active section and nav indicator
			setActiveSection(closestSection);
			const navItem = ref.current?.querySelector(
				`[href="#${closestSection}"]`,
			)?.parentElement;
			if (navItem) {
				const rect = navItem.getBoundingClientRect();
				setLeft(navItem.offsetLeft);
				setWidth(rect.width);
				setIsReady(true);
			} else {
				setIsReady(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isManualScroll, pathname]);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		item: NavItem,
	) => {
		// If it's a full path (not a hash link), let Next.js handle navigation
		if (!item.href.startsWith("#")) {
			return; // Let Next.js Link handle it
		}

		e.preventDefault();

		const targetId = item.href.substring(1);
		const element = document.getElementById(targetId);

		if (element) {
			// Set manual scroll flag
			setIsManualScroll(true);

			// Immediately update nav state
			setActiveSection(targetId);
			const navItem = e.currentTarget.parentElement;
			if (navItem) {
				const rect = navItem.getBoundingClientRect();
				setLeft(navItem.offsetLeft);
				setWidth(rect.width);
			}

			// Calculate exact scroll position
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset

			// Smooth scroll to exact position
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			// Reset manual scroll flag after animation completes
			setTimeout(() => {
				setIsManualScroll(false);
			}, 500); // Adjust timing to match scroll animation duration
		}
	};

	return (
		<div className="hidden w-full md:block">
			<ul
				className="relative mx-auto flex h-11 w-fit items-center justify-center rounded-full px-2"
				ref={ref}
			>
				{navs.map((item) => {
					const isHashLink = item.href.startsWith("#");
					const sectionId = isHashLink ? item.href.substring(1) : "";
					
					// Determine if item is active
					let isActive = false;
					if (isHashLink) {
						// For hash links, check activeSection (only works on home page)
						isActive = pathname === "/" && activeSection === sectionId;
					} else {
						// For full paths, check if pathname matches
						isActive = pathname === item.href;
					}
					
					// If on home page and this is not a hash link, it should not be active
					if (pathname === "/" && !isHashLink) {
						isActive = false;
					}
					
					return (
						<li
							key={item.name}
							className={`z-10 flex h-full cursor-pointer items-center justify-center px-4 py-2 font-medium text-sm transition-colors duration-200 ${
								isActive
									? "text-primary"
									: "text-primary/60 hover:text-primary"
							} tracking-tight`}
						>
							{isHashLink ? (
								<a href={item.href} onClick={(e) => handleClick(e, item)}>
									{item.name}
								</a>
							) : (
								<Link href={item.href}>
									{item.name}
								</Link>
							)}
						</li>
					);
				})}
				{isReady && (
					<motion.li
						animate={{ left, width }}
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
						className="absolute inset-0 my-1.5 rounded-full border border-border bg-accent/60"
					/>
				)}
			</ul>
		</div>
	);
}
