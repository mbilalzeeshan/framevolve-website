interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
      {text}
    </span>
  );
}
