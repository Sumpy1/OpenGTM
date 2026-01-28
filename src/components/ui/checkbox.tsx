import * as React from "react";

import { cn } from "@/lib/utils";

function Checkbox({
	className,
	...props
}: React.ComponentProps<"input">) {
	return (
		<input
			type="checkbox"
			data-slot="checkbox"
			className={cn(
				"size-4 rounded border border-input shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
				"checked:bg-primary checked:border-primary checked:text-primary-foreground",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
				className,
			)}
			{...props}
		/>
	);
}

export { Checkbox };
