"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CircleFlagsLangTr } from "@/public/flags/turk-bayrak";
import { CircleFlagsGb } from "@/public/flags/gb-bayrak";

export default function LanguageChanger() {
  const [currentLanguage, setCurrentLanguage] = useState("tr");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex p-1.5 mr-4 items-center rounded-md space-x-2 bg-neutral-300 text-sm text-foreground transition-colors hover:bg-[#DC2626] focus:outline-none disabled:pointer-events-none disabled:opacity-50  border-none">
          {currentLanguage === "tr" ? (
            <CircleFlagsLangTr className="h-4 w-4" />
          ) : (
            <CircleFlagsGb className="h-4 w-4" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1 rounded-md bg-neutral-300 border border-neutral-300 ">
        <DropdownMenuItem onClick={() => setCurrentLanguage("tr")}>
          <CircleFlagsLangTr className="h-4 w-4 mr-2" />
          Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrentLanguage("en")}>
          <CircleFlagsGb className="h-4 w-4 mr-2" />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
