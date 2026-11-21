import { cn } from "@/lib/utils";

export const inputClass =
  "w-full border border-navy/20 bg-cloud/50 px-4 py-3 text-base text-navy outline-none transition focus:border-navy focus:bg-white focus:ring-3 focus:ring-navy/10 aria-invalid:border-red-700";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
};

function Label({ label, required, hint }: { label: string; required?: boolean; hint?: string }) {
  return (
    <span className="mb-1.5 block text-[15px] font-medium text-navy">
      {label}
      {required && <span className="text-red-700"> *</span>}
      {hint && <span className="ml-1 font-normal text-muted-foreground">({hint})</span>}
    </span>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  return error ? (
    <span id={id} className="mt-1 block text-sm text-red-700">
      {error}
    </span>
  ) : null;
}

export function TextField({
  label,
  name,
  error,
  required,
  hint,
  className,
  type = "text",
  autoComplete,
  max,
}: BaseProps & { type?: string; autoComplete?: string; max?: string }) {
  const errorId = `${name}-error`;
  return (
    <label className={cn("block min-w-0", className)}>
      <Label label={label} required={required} hint={hint} />
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        max={max}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      />
      <ErrorText id={errorId} error={error} />
    </label>
  );
}

export function TextArea({ label, name, error, required, hint, className, rows = 4 }: BaseProps & { rows?: number }) {
  const errorId = `${name}-error`;
  return (
    <label className={cn("block min-w-0", className)}>
      <Label label={label} required={required} hint={hint} />
      <textarea
        name={name}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={cn(inputClass, "resize-y")}
      />
      <ErrorText id={errorId} error={error} />
    </label>
  );
}

export function SelectField({ label, name, error, required, hint, className, options }: BaseProps & { options: string[] }) {
  const errorId = `${name}-error`;
  return (
    <label className={cn("block min-w-0", className)}>
      <Label label={label} required={required} hint={hint} />
      <select name={name} defaultValue="" aria-invalid={!!error} aria-describedby={error ? errorId : undefined} className={inputClass}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ErrorText id={errorId} error={error} />
    </label>
  );
}

/** Hidden from people; bots that fill every field reveal themselves. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
