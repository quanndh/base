import Document, { DocumentContext, Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from 'src/helpers/environment';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { __NEXT_DATA__ } = this.props;
    return (
      <Html lang={(__NEXT_DATA__?.query?.lang as string) ?? 'vi'}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" crossOrigin="anonymous" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" crossOrigin="anonymous" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" crossOrigin="anonymous" />
          <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" crossOrigin="anonymous" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" crossOrigin="anonymous" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#141ed2" />

          <link
            crossOrigin="anonymous"
            rel="stylesheet"
            as="style"
            href={`https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700;1,900&display=swap`}
          />

          {/* Global site tag (gtag.js) - Google Analytics */}
          {!!GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                crossOrigin="anonymous"
              />

              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
