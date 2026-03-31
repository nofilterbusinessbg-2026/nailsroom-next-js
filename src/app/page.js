import { readFile } from "node:fs/promises";
import path from "node:path";
import Script from "next/script";

async function loadOriginalHtmlParts() {
  const filePath = path.join(process.cwd(), "public", "original.html");
  const originalHtml = await readFile(filePath, "utf8");

  const styleMatch = originalHtml.match(/<style>([\s\S]*?)<\/style>/i);
  const bodyMatch = originalHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!styleMatch || !bodyMatch) {
    throw new Error("Could not parse original.html content.");
  }

  const scriptMatch = bodyMatch[1].match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  const bodyWithoutScript = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "");

  return {
    styles: styleMatch[1],
    body: bodyWithoutScript,
    script: scriptMatch ? scriptMatch[1] : "",
  };
}

export default async function Home() {
  const { styles, body, script } = await loadOriginalHtmlParts();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      {script ? (
        <Script
          id="original-inline-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: script }}
        />
      ) : null}
    </>
  );
}
