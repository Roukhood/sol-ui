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
      <DocLayout
        {...DOCS_LAYOUT_PROPS}
        nav={{
          component: <BankKitNav/>,
        }}
      >
        {children}
      </DocLayout>
    </>
  );
}
