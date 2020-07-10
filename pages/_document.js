import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractStyles } from 'evergreen-ui'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { css, hydrationScript } = extractStyles()
    return { ...initialProps, css, hydrationScript };
  }

  render() {
    const { css, hydrationScript } = this.props
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0; }`}</style>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
