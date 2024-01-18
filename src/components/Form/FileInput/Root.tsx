"use client";

import axios, { AxiosProgressEvent } from "axios";
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

type RootProps = ComponentProps<"div">;

type FileUploadType = {
  [fileName: string]: {
    percentage: number;
    bytesSent: number;
  };
};

type FileInputContextType = {
  id: string;
  files: File[];
  isAllFilesUploaded: boolean;
  uploadProgress: FileUploadType;
  uploadFile: (file: File) => void;
  onFilesSelected: (files: File[], multiple: boolean) => void;
  onRemoveFile: (fileName: string) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<FileUploadType>({});
  const [isAllFilesUploaded, setIsAllFilesUploaded] = useState(false);

  const uploadFile = async (file: File) => {
    try {
      onAllFilesUploaded(false);

      const formData = new FormData();
      formData.append("file", file);

      await axios.post("/upload", formData, {
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const bytesSent = progressEvent.loaded || 0;
          const totalBytes = progressEvent.total || 1;
          const percentage = Math.round((bytesSent / totalBytes) * 100);

          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: { percentage, bytesSent },
          }));
        },
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      onAllFilesUploaded(true);
    }
  };

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  function onAllFilesUploaded(state: boolean) {
    setIsAllFilesUploaded(state);
  }

  function onRemoveFile(fileName: string) {
    const filesWithoutDeletedOne = files.filter(
      (file) => file.name !== fileName,
    );

    if (filesWithoutDeletedOne.length === 0) {
      setUploadProgress({});
      setIsAllFilesUploaded(false);
    }

    setFiles(filesWithoutDeletedOne);
  }

  return (
    <FileInputContext.Provider
      value={{
        id,
        files,
        uploadProgress,
        onFilesSelected,
        onRemoveFile,
        isAllFilesUploaded,
        uploadFile,
      }}
    >
      <div {...props} />;
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
