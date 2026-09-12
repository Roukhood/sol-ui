import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

import { source } from "@/lib/source";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = true;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  const markdown = await page.data.getText("raw");

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }));
}
