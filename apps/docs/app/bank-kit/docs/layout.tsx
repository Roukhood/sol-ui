import { SideBarDocs } from "@/src/components/docs/side-bar-docs";
import React from "react";
import {
  DocsLayout as DocLayout,
  DocsLayoutProps,
} from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import BankKitNav from "@/src/components/bank-kit-nav";

const DOCS_LAYOUT_PROPS: DocsLayoutProps = {
  tree: source.pageTree,
};
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
   <div className="flex gap-2">
     <SideBarDocs/>
      <DocLayout
        {...DOCS_LAYOUT_PROPS}
        sidebar={{
          enabled: false
        }}
      >
        
        {children}
      </DocLayout>
   </div>
    </>
  );
}
