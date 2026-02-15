"use client";

import type { Slide } from "@/data/slides";
import { TitleLayout } from "@/components/layouts/TitleLayout";
import { SplitLayout } from "@/components/layouts/SplitLayout";
import { GridLayout } from "@/components/layouts/GridLayout";
import { BentoLayout } from "@/components/layouts/BentoLayout";
import { TableLayout } from "@/components/layouts/TableLayout";
import { ProcessLayout } from "@/components/layouts/ProcessLayout";
import { ListLayout } from "@/components/layouts/ListLayout";
import { CodeBlocksLayout } from "@/components/layouts/CodeBlocksLayout";
import { ChecklistLayout } from "@/components/layouts/ChecklistLayout";
import { PathsLayout } from "@/components/layouts/PathsLayout";

export function SlideRenderer({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case "title":
      return <TitleLayout slide={slide} />;
    case "split":
      return <SplitLayout slide={slide} />;
    case "grid":
      return <GridLayout slide={slide} />;
    case "bento":
      return <BentoLayout slide={slide} />;
    case "table":
      return <TableLayout slide={slide} />;
    case "process":
      return <ProcessLayout slide={slide} />;
    case "list":
      return <ListLayout slide={slide} />;
    case "codeblocks":
      return <CodeBlocksLayout slide={slide} />;
    case "checklist":
      return <ChecklistLayout slide={slide} />;
    case "paths":
      return <PathsLayout slide={slide} />;
    default:
      return null;
  }
}
