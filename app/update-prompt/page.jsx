"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import EditPrompt component
const EditPrompt = dynamic(() => import("./EditPrompt"), { ssr: false });

const EditPromptPage = () => {
  return (
    <Suspense fallback={<div>Loading Edit Page...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default EditPromptPage;
