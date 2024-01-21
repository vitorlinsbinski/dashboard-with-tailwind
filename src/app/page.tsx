import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import {
  Bold,
  Clock,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
} from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import * as Select from "@/components/Form/Select";
import { CountrySelect } from "@/components/Form/CountrySelect";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          action=""
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control defaultValue="Vitor" id="firstName" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Linsbinski" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>

              <Input.Control
                defaultValue="vitor.linsbinski@hotmail.com"
                id="email"
                type="email"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />

                <FileInput.Trigger />

                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control defaultValue="Student" id="role" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <CountrySelect />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select.Root name="timezone">
              <Select.Trigger>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-zinc-500" />

                  <Select.Value placeholder="Select your timezone..." />
                </div>
              </Select.Trigger>

              <Select.Content>
                <Select.Item value="utc-8">
                  <Select.ItemText>
                    Pacific Standard Time
                    <span className="text-sm text-zinc-500">UTC 08:00</span>
                  </Select.ItemText>
                </Select.Item>

                <Select.Item value="utc-4">
                  <Select.ItemText>
                    America São Paulo
                    <span className="text-sm text-zinc-500">UTC 04:00</span>
                  </Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select.Root name="timezone" defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value placeholder="" />
                  </Select.Trigger>

                  <Select.Content>
                    <Select.Item value="normal">
                      <Select.ItemText>Normal Text</Select.ItemText>
                    </Select.Item>

                    <Select.Item value="md">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <div>
              <FileInput.Root>
                <FileInput.Trigger />

                <FileInput.FileList />

                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 p-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
