"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface ApplyAsAgentModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const AGENT_JOBS = [
	"Agent Relations Manager",
	"Agent Manager",
	"GTM Architect",
	"GTM Engineer",
	"Marketing Manager",
	"Community Manager",
	"Content Lead",
	"Research Assistant",
	"Product Designer",
	"Product Engineer",
];

export function ApplyAsAgentModal({
	open,
	onOpenChange,
}: ApplyAsAgentModalProps) {
	const [formData, setFormData] = useState({
		agentJob: "",
		companyName: "",
		agent: "",
		whyYourAgent: "",
		pricingModel: "",
		contactEmail: "",
		signUpForNews: false,
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form
		const newErrors: Record<string, string> = {};
		if (!formData.agentJob) newErrors.agentJob = "Agent job selection is required";
		if (!formData.whyYourAgent.trim()) {
			newErrors.whyYourAgent = "This field is required";
		}
		if (!formData.pricingModel.trim()) {
			newErrors.pricingModel = "This field is required";
		}
		if (!formData.contactEmail.trim()) {
			newErrors.contactEmail = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
			newErrors.contactEmail = "Please enter a valid email address";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// TODO: Handle form submission (e.g., send to API)
		console.log("Form submitted:", formData);

		// Reset form and close modal
		setFormData({
			agentJob: "",
			companyName: "",
			agent: "",
			whyYourAgent: "",
			pricingModel: "",
			contactEmail: "",
			signUpForNews: false,
		});
		setErrors({});
		onOpenChange(false);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));

		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Apply as an Agent</DialogTitle>
					<DialogDescription>
						Fill out the form below to apply for an agent position at OpenGTM.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Agent Job Selection */}
					<div className="space-y-2">
						<Label htmlFor="agentJob">
							Agent Job <span className="text-destructive">*</span>
						</Label>
						<p className="text-sm text-muted-foreground">
							Which agent job are you applying for?
						</p>
						<Select
							id="agentJob"
							name="agentJob"
							value={formData.agentJob}
							onChange={handleChange}
							aria-invalid={errors.agentJob ? "true" : "false"}
						>
							<option value="">Select an option</option>
							{AGENT_JOBS.map((job) => (
								<option key={job} value={job}>
									{job}
								</option>
							))}
						</Select>
						{errors.agentJob && (
							<p className="text-sm text-destructive">{errors.agentJob}</p>
						)}
					</div>

					{/* Company Name */}
					<div className="space-y-2">
						<Label htmlFor="companyName">Company Name</Label>
						<p className="text-sm text-muted-foreground">
							What company does your agent work at?
						</p>
						<Input
							id="companyName"
							name="companyName"
							type="text"
							value={formData.companyName}
							onChange={handleChange}
						/>
					</div>

					{/* Agent */}
					<div className="space-y-2">
						<Label htmlFor="agent">Agent</Label>
						<p className="text-sm text-muted-foreground">
							What is your product called?
						</p>
						<Input
							id="agent"
							name="agent"
							type="text"
							value={formData.agent}
							onChange={handleChange}
						/>
					</div>

					{/* Why Your Agent */}
					<div className="space-y-2">
						<Label htmlFor="whyYourAgent">
							Why Your Agent? <span className="text-destructive">*</span>
						</Label>
						<p className="text-sm text-muted-foreground">
							Why is your agent the best tool for this job?
						</p>
						<Textarea
							id="whyYourAgent"
							name="whyYourAgent"
							value={formData.whyYourAgent}
							onChange={handleChange}
							rows={6}
							aria-invalid={errors.whyYourAgent ? "true" : "false"}
						/>
						{errors.whyYourAgent && (
							<p className="text-sm text-destructive">{errors.whyYourAgent}</p>
						)}
					</div>

					{/* Pricing Model */}
					<div className="space-y-2">
						<Label htmlFor="pricingModel">
							Pricing Model <span className="text-destructive">*</span>
						</Label>
						<p className="text-sm text-muted-foreground">
							How does pricing work in units, terms and cost?
						</p>
						<Textarea
							id="pricingModel"
							name="pricingModel"
							value={formData.pricingModel}
							onChange={handleChange}
							rows={6}
							aria-invalid={errors.pricingModel ? "true" : "false"}
						/>
						{errors.pricingModel && (
							<p className="text-sm text-destructive">{errors.pricingModel}</p>
						)}
					</div>

					{/* Contact Email */}
					<div className="space-y-2">
						<Label htmlFor="contactEmail">
							Contact Email <span className="text-destructive">*</span>
						</Label>
						<Input
							id="contactEmail"
							name="contactEmail"
							type="email"
							value={formData.contactEmail}
							onChange={handleChange}
							aria-invalid={errors.contactEmail ? "true" : "false"}
						/>
						{errors.contactEmail && (
							<p className="text-sm text-destructive">{errors.contactEmail}</p>
						)}
					</div>

					{/* Sign up for news checkbox */}
					<div className="flex items-center gap-2">
						<Checkbox
							id="signUpForNews"
							name="signUpForNews"
							checked={formData.signUpForNews}
							onChange={handleChange}
						/>
						<Label htmlFor="signUpForNews" className="cursor-pointer font-normal">
							Sign up for news and updates
						</Label>
					</div>

					{/* Submit Button */}
					<div className="flex justify-end gap-2 pt-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<Button type="submit" className="rounded-full">
							Submit
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
