import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import EditPrompt component
const EditPrompt = dynamic(() => import("./page"), { ssr: false });

const EditPromptPage = () => {
  return (
    <Suspense fallback={<div>Loading Edit Page...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default EditPromptPage;
