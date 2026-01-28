"use client";

import { ReactNode } from "react";

export function ConditionalLayoutWrapper({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="relative mx-auto max-w-7xl border-x">
			<div className="absolute top-0 left-6 z-10 block h-full w-px border-border border-l"></div>
			<div className="absolute top-0 right-6 z-10 block h-full w-px border-border border-r"></div>
			{children}
		</div>
	);
}
