import juice from "juice";
import Document, { Html, Main, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentInitialProps } from "next/document";

const isProduction = process.env.NODE_ENV === "production";
const classRegex = / class=\"[^\"]*\"/g;

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      if (isProduction) {
        const styleTag = sheet.getStyleTags();
        let { html } = initialProps;
        html = juice(styleTag + html);
        html = html.replace(classRegex, "");
        return { html };
      }

      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()] as any,
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    if (isProduction)
      return (
        <Html lang="ja">
          <head>
            <meta
              http-equiv="content-type"
              content="text/html; charset=iso-2022-jp"
            ></meta>
          </head>
          <body>
            <Main />
          </body>
        </Html>
      );

    return super.render();
  }
}
