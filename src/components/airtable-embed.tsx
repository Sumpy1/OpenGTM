"use client";

import { useEffect, useRef, useState } from "react";

interface AirtableEmbedProps {
	src: string;
	height?: number;
	title?: string;
	fallbackLinks?: {
		airtable?: string;
		external?: string;
	};
}

export function AirtableEmbed({
	src,
	height = 800,
	title = "Airtable Embed",
	fallbackLinks,
}: AirtableEmbedProps) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [showError, setShowError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (!iframe) return;

		// Set a timeout to show error if iframe doesn't load within 8 seconds
		// X-Frame-Options errors happen immediately, so this catches those cases
		const timeout = setTimeout(() => {
			if (isLoading) {
				setShowError(true);
				setIsLoading(false);
			}
		}, 8000);

		// Try to detect iframe load
		const handleLoad = () => {
			setIsLoading(false);
			clearTimeout(timeout);
			
			// Check if we can access the iframe content (may fail due to CORS/X-Frame-Options)
			// Note: This check happens after load, but X-Frame-Options blocks loading entirely
			setTimeout(() => {
				try {
					// Try to access iframe content - will throw if blocked by X-Frame-Options
					const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
					// If we can access it, check if it's actually Airtable content
					if (iframeDoc && iframeDoc.body) {
						// Check if body is empty or shows an error (common with X-Frame-Options)
						const bodyText = iframeDoc.body.textContent || "";
						if (bodyText.includes("refused to display") || bodyText.includes("X-Frame-Options")) {
							setShowError(true);
						}
					}
				} catch (e) {
					// CORS/X-Frame-Options error - this is expected and means it's blocked
					// Don't show error immediately as the iframe might still be loading
					// The timeout will handle it if it doesn't load
				}
			}, 1000);
		};

		// Try to detect errors
		const handleError = () => {
			setShowError(true);
			setIsLoading(false);
			clearTimeout(timeout);
		};

		iframe.addEventListener("load", handleLoad);
		iframe.addEventListener("error", handleError);

		// Also check console errors (though we can't directly access them)
		// The browser console will show the X-Frame-Options error

		return () => {
			clearTimeout(timeout);
			iframe.removeEventListener("load", handleLoad);
			iframe.removeEventListener("error", handleError);
		};
	}, [isLoading]);

	return (
		<div className="relative w-full" style={{ minHeight: `${height}px` }}>
			<iframe
				ref={iframeRef}
				className="airtable-embed w-full"
				src={src}
				width="100%"
				height={height}
				style={{
					background: "transparent",
					border: "none",
				}}
				frameBorder="0"
				title={title}
				loading="lazy"
			/>
			{showError && (
				<div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm z-10">
					<div className="text-center p-8 max-w-md">
						<p className="text-muted-foreground mb-4 text-lg font-medium">
							Unable to load Airtable embed
						</p>
						<p className="text-sm text-muted-foreground mb-6">
							The embed may be disabled or blocked. To fix this:
							<br />
							<br />
							1. Open your Airtable base
							<br />
							2. Click &quot;Share and sync&quot; → &quot;Link settings&quot;
							<br />
							3. Make sure the link is enabled
							<br />
							4. Then click &quot;Embed this view&quot; to get a new embed code
						</p>
						<div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
							{fallbackLinks?.airtable && (
								<a
									href={fallbackLinks.airtable}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
								>
									Open in Airtable →
								</a>
							)}
							{fallbackLinks?.external && (
								<a
									href={fallbackLinks.external}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
								>
									Explore Data →
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
