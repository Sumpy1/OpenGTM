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

interface ApplyAsHumanModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const JOBS = [
	"GM, Transformer",
	"GM, Research Lab",
	"VP, Agent Relations",
	"VP, Agent Manager",
	"Advisor and Mentor (Box)",
	"Advisor and Mentor (VC)",
];

export function ApplyAsHumanModal({
	open,
	onOpenChange,
}: ApplyAsHumanModalProps) {
	const [formData, setFormData] = useState({
		job: "",
		firstName: "",
		lastName: "",
		email: "",
		signUpForNews: false,
		whyYou: "",
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form
		const newErrors: Record<string, string> = {};
		if (!formData.job) newErrors.job = "Job selection is required";
		if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		if (!formData.whyYou.trim()) newErrors.whyYou = "This field is required";

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		// TODO: Handle form submission (e.g., send to API)
		console.log("Form submitted:", formData);
		
		// Reset form and close modal
		setFormData({
			job: "",
			firstName: "",
			lastName: "",
			email: "",
			signUpForNews: false,
			whyYou: "",
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
					<DialogTitle>Apply as a human</DialogTitle>
					<DialogDescription>
						Fill out the form below to apply for a position at OpenGTM.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Job Selection */}
					<div className="space-y-2">
						<Label htmlFor="job">
							Job <span className="text-destructive">*</span>
						</Label>
						<Select
							id="job"
							name="job"
							value={formData.job}
							onChange={handleChange}
							aria-invalid={errors.job ? "true" : "false"}
						>
							<option value="">Select an option</option>
							{JOBS.map((job) => (
								<option key={job} value={job}>
									{job}
								</option>
							))}
						</Select>
						{errors.job && (
							<p className="text-sm text-destructive">{errors.job}</p>
						)}
					</div>

					{/* Name Fields */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="firstName">
								First Name <span className="text-destructive">*</span>
							</Label>
							<Input
								id="firstName"
								name="firstName"
								type="text"
								value={formData.firstName}
								onChange={handleChange}
								aria-invalid={errors.firstName ? "true" : "false"}
							/>
							{errors.firstName && (
								<p className="text-sm text-destructive">{errors.firstName}</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">
								Last Name <span className="text-destructive">*</span>
							</Label>
							<Input
								id="lastName"
								name="lastName"
								type="text"
								value={formData.lastName}
								onChange={handleChange}
								aria-invalid={errors.lastName ? "true" : "false"}
							/>
							{errors.lastName && (
								<p className="text-sm text-destructive">{errors.lastName}</p>
							)}
						</div>
					</div>

					{/* Email */}
					<div className="space-y-2">
						<Label htmlFor="email">
							Email <span className="text-destructive">*</span>
						</Label>
						<Input
							id="email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							aria-invalid={errors.email ? "true" : "false"}
						/>
						{errors.email && (
							<p className="text-sm text-destructive">{errors.email}</p>
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

					{/* Why you */}
					<div className="space-y-2">
						<Label htmlFor="whyYou">
							Why you? <span className="text-destructive">*</span>
						</Label>
						<Textarea
							id="whyYou"
							name="whyYou"
							value={formData.whyYou}
							onChange={handleChange}
							placeholder="explain how you're the best human in the world for this"
							rows={6}
							aria-invalid={errors.whyYou ? "true" : "false"}
						/>
						{errors.whyYou && (
							<p className="text-sm text-destructive">{errors.whyYou}</p>
						)}
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
