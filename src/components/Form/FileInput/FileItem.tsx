import { useFileInput } from "./Root";
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { formatBytes } from "@/utils/formatBytes";
import { Button } from "@/components/Button";
import { tv, VariantProps } from "tailwind-variants";

export const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4 transition-colors",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600",
  },

  variants: {
    state: {
      progress: {
        container: "",
      },
      complete: {
        container: "border-violet-500",
      },
      error: {
        container: "bg-error-25 border-error-300",
        icon: "border-error-50 bg-error-100 text-error-600",
      },
    },
  },

  defaultVariants: {
    state: "progress",
  },
});

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  percentage: number;
  bytesSent: number;
}

export function FileItem({
  name,
  percentage,
  bytesSent,
  state,
}: FileItemProps) {
  const { container, icon } = fileItem({ state });

  const { onRemoveFile } = useFileInput();

  function handleRemoveFile(fileName: string) {
    onRemoveFile(fileName);
  }

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 transition-colors hover:text-red-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
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
      )}

      {state === "complete" ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          type="button"
          variant="ghost"
          onClick={() => handleRemoveFile(name)}
        >
          <Trash2 className="h-5 w-5 text-zinc-500" />
        </Button>
      )}
    </div>
  );
}
