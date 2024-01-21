"use client";

import { useFileInput } from "./Root";
import { useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileItem } from "./FileItem";

type FileItemState = "progress" | "complete" | "error" | undefined;

export function FileList() {
  const {
    files,
    isAllFilesUploaded,
    uploadProgress,
    uploadFile,
    isAnUploadError,
  } = useFileInput();

  const [parent] = useAutoAnimate({
    easing: "ease-in-out",
  });

  useEffect(() => {
    files.forEach((file) => {
      if (!uploadProgress[file.name]) {
        uploadFile(file);
      }
    });
  }, [files, uploadProgress, isAllFilesUploaded]);

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        const { percentage, bytesSent } = uploadProgress[file.name] || {
          percentage: 0,
          bytesSent: 0,
        };

        const stateMap: FileItemState = isAnUploadError
          ? "error"
          : percentage === 0
            ? "progress"
            : percentage === 100
              ? "complete"
              : undefined;

        return (
          <FileItem
            key={file.name}
            name={file.name}
            bytesSent={bytesSent}
            percentage={percentage}
            state={stateMap}
          />
        );
      })}
    </div>
  );
}
