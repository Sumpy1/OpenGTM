export function HeroVideoSection() {
	return (
		<div className="relative mt-10 px-6">
			<div className="relative size-full overflow-hidden rounded-2xl shadow-xl">
				<video
					src="/video/video.mp4"
					className="w-full h-auto rounded-2xl"
					autoPlay
					loop
					muted
					playsInline
					controls
				/>
			</div>
		</div>
	);
}
