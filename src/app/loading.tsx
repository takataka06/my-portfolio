import LoadingSpinner from "@/components/LoadingSpinner.tsx";

export default function GlobalLoading() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
