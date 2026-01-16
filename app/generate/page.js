import { Suspense } from "react";
import GeneratePage from "./GeneratePage";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <GeneratePage />
    </Suspense>
  );
}
