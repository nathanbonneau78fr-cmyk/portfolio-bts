import { type ReactNode } from "react";

interface PageSectionProps {
  title?: string;
  children: ReactNode;
  /** Optionnel : id pour ancrage */
  id?: string;
  /** Classe additionnelle pour le conteneur */
  className?: string;
}

/**
 * Section de page avec titre optionnel et conteneur cohérent.
 */
export function PageSection({
  title,
  children,
  id,
  className = "",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-3xl px-4 py-8 sm:px-6 ${className}`}
    >
      {title && (
        <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      )}
      <div className="prose-custom">{children}</div>
    </section>
  );
}
