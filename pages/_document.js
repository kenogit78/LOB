import Document, { Html, Head, NextScript, Main } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

    
    render() {
        return (
        
        <Html lang="en-EN">
            <Head>
                {CssBaseline.flush()}  
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }

}