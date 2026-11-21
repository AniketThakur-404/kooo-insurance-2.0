import Link from "next/link";

/** Breadcrumb trail that sits above the big page title without pushing it down. */
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative z-20 h-0 px-6 md:px-8">
      <ol className="absolute top-26 flex flex-wrap items-center gap-x-2 gap-y-1 pr-6 text-sm text-navy/70 md:top-30">
        <li>
          <Link href="/" className="hover:text-navy hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <span aria-hidden className="size-1 bg-kooo-green-dark" />
              {last ? (
                <span aria-current="page" className="text-navy">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-navy hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
