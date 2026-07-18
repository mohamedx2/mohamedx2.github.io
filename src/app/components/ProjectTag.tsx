"use client";

export default function ProjectTag({ tag, highlight }: { tag: string; highlight?: boolean }) {
  if (highlight) {
    return (
      <span className="inline-flex items-center gap-1.5 font-label-caps text-[9px] tracking-widest bg-primary text-on-primary px-3 py-1 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse" />
        {tag}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center font-label-caps text-[9px] tracking-widest border border-primary px-3 py-1 uppercase relative overflow-hidden">
      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
      <span className="pl-1.5">{tag}</span>
    </span>
  );
}
