import LoadingSpinner from "@/components/LoadingSpinner";

export default function GlobalLoading() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
