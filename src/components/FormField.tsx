
export function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-foreground/80">{label}</span>
      {children} {/* childrenはInputやTextareaなどのフォーム要素 */}
    </label>
  );
}