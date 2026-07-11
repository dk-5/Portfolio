import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section id="publications" className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-mono text-xs tracking-widest text-signal">
          PUBLICATIONS
        </h2>
        <div className="mt-2 h-px bg-surface" />

        <div className="mt-10 space-y-6">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/pub block rounded-lg bg-surface p-5 transition-colors hover:bg-surface/80"
            >
              <h3 className="text-sm font-medium leading-snug text-paper transition-colors group-hover/pub:text-signal">
                {pub.title}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <p className="font-mono text-xs text-slate">
                  {pub.venue} — {pub.year}
                </p>
                <span className="font-mono text-xs text-signal opacity-0 transition-opacity group-hover/pub:opacity-100">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
