interface SectionHeadingProps {
  badge?: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-bold">{title}</h2>

      <p className="mt-6 text-lg text-gray-400">{description}</p>
    </div>
  );
}
