import { cn } from "@/lib/utils";

/** Cadre smartphone réutilisable — l'image passée est remplaçable via la config. */
export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.2rem] border border-border bg-ink p-2 shadow-lift",
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
      <div className="overflow-hidden rounded-[1.7rem] bg-background">
        <img
          src={src}
          alt={alt}
          width={909}
          height={1920}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

/** Cadre ordinateur portable réutilisable. */
export function LaptopFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-2xl border border-border bg-ink p-2 shadow-lift">
        <div className="mb-1.5 flex gap-1.5 px-1">
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/15" />
        </div>
        <div className="overflow-hidden rounded-xl bg-background">
          <img
            src={src}
            alt={alt}
            width={1786}
            height={1180}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
      </div>
      <div className="mx-auto h-2 w-2/3 rounded-b-xl bg-ink/80" />
    </div>
  );
}
