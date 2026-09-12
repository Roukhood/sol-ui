import { source } from "@/lib/source";
import {
  absoluteBankDocsUrl,
  getBankDocsNeighbours,
} from "@/lib/bank-docs-nav";
import { getMDXComponents } from "@/mdx-components";
import { DocsCopyPage } from "@/src/components/docs/docs-copy-page";
import { DocsPager } from "@/src/components/docs/docs-pager";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;
  const markdown = await page.data.getText("raw");
  const neighbours = getBankDocsNeighbours(params.slug);
  const pagePath = `/bank-kit/docs/${params.slug.join("/")}`;
  const absoluteUrl = absoluteBankDocsUrl(pagePath);

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={{ enabled: false }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <DocsTitle className="font-medium">{page.data.title}</DocsTitle>
        <div className="flex items-center gap-2">
          <DocsCopyPage
            page={markdown}
            url={absoluteUrl}
            path={pagePath}
          />
          <DocsPager
            previous={neighbours.previous}
            next={neighbours.next}
            variant="header"
          />
        </div>
      </div>

      <DocsBody id="docs-body" className="pb-4 pt-4">
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>

      <DocsPager previous={neighbours.previous} next={neighbours.next} />
    </DocsPage>
  );
}
