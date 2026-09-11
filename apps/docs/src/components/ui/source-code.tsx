
import { CodeBlock } from "fumadocs-ui/components/codeblock";
import { codeToHtml } from "shiki";


export async function SourceCode({
  name,
  filePath: providedFilePath,
  children,
  title,
  content
}: {
  name?: string;
  filePath?: string;
  title?: string;
  children?: React.ReactNode;
  content: string;
}) {

    const lang = 'tsx'

  const html = await codeToHtml(content, {
   lang, 
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });

  return (
    <CodeBlock title={title}>
      <div dangerouslySetInnerHTML={{ __html: html}} />
    </CodeBlock>
  );
}
