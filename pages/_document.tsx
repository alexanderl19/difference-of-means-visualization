import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { resetId } from "react-id-generator";
import { globalCss, getCssText, reset } from "stitches.config";

const globalStyles = globalCss({
  body: { display: "block", margin: 8, fontFamily: "$sans" },
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
});

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          data-domain="explore.alexanderliu.dev"
          src="https://plausible.io/js/plausible.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async function getInitialProps(
  ctx: DocumentContext
) {
  resetId();
  globalStyles();
  const results = await ctx.defaultGetInitialProps(ctx);

  const stitchesCssString = getCssText();
  reset();

  return {
    ...results,
    styles: (
      <>
        {results.styles}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: stitchesCssString }}
        />
      </>
    ),
  };
};
