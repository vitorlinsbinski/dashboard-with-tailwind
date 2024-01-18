"use client";

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/utils/formatBytes";
import { useEffect, useState } from "react";
import axios, { AxiosProgressEvent } from "axios";

type FileUploadType = {
  [fileName: string]: {
    percentage: number;
    bytesSent: number;
  };
};

export function FileList() {
  const {
    files,
    onRemoveFile,
    isAllFilesUploaded,
    uploadProgress,
    uploadFile,
  } = useFileInput();

  useEffect(() => {
    files.forEach((file) => {
      if (!uploadProgress[file.name]) {
        uploadFile(file);
      }
    });
  }, [files]);

  function handleRemoveFile(fileName: string) {
    onRemoveFile(fileName);
  }

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        const { percentage, bytesSent } = uploadProgress[file.name] || {
          percentage: 0,
          bytesSent: 0,
        };

        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {formatBytes(bytesSent)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div
                    style={{ width: `${percentage}%` }}
                    className="h-2 rounded-full bg-violet-600"
                  />
                </div>

                <span className="text-sm font-medium text-zinc-700">{`${percentage}%`}</span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md p-2 hover:bg-zinc-50 disabled:cursor-not-allowed"
              onClick={() => handleRemoveFile(file.name)}
              disabled={!isAllFilesUploaded}
            >
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
