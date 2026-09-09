import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { registry } from "@sol-ui/bank-kit";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { notFound } from "next/navigation";

export default async function Page(props : {params : Promise<{ slug : string[]}>}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if(!page) notFound();

  const MDXContent = page.data.body;
  const tree = source.getPageTree();

  // const item = registry
  //   .filter((x) => x.type == "component")
  //   .find((x) => x.slug == slug);

  // if (!item) return <h1>error found</h1>;

  // const Demo = item?.component;
  // const title = item?.title;

  return (
    // <div
    //   data-slot="docs"
    //   className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-8 pb-12 text-[1.05rem] sm:text-[15px]"
    // >
    //   <header className="space-y-2">
    //     <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
    //     {/* {page.data.description ? (
    //       <p className="max-w-2xl text-base -muted-foreground">{page.data.description}</p>
    //     ) : null} */}
    //   </header>

    //   <div className="prose dark:prose-invert max-w-none w-full h-fit py-32 border rounded-2xl md:overflow-hidden  flex items-center justify-center">
    //     <Demo />
    //   </div>
    //   <div className="">
    //     <h1>Installation</h1>
    //     <div className="w-full h-80 bg-yellow-100"></div>
    //     <div className="w-full h-80 bg-green-100"></div>
    //     <div className="w-full h-80 bg-red-100"></div>
    //     <div className="w-full h-80 bg-pink-100"></div>
    //   </div>
    // </div>
    <DocsPage
    toc={page.data.toc}
    full={page.data.full}
    >
      <DocsTitle className="font-medium">{page.data.title}</DocsTitle>
      <DocsBody id="docs-body" className="pb-10 pt-4">
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}
