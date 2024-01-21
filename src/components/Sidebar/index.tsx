"use client";

import { Logo } from "./Logo";
import { Cog, LifeBuoy, Menu, Search } from "lucide-react";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";

export function Sidebar() {
  return (
    <Collapsible.Root className="scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-y-auto overflow-x-hidden border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>

          <Input.Control placeholder="Search" />
        </Input.Root>

        <MainNavigation />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem icon={LifeBuoy} title="Support" />
            <NavItem icon={Cog} title="Settings" />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
