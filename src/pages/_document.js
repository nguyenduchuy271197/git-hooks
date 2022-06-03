import { Html, Head, Main, NextScript } from "next/document";
import { AppConfig } from "@/utils/AppConfig";

export default function Document() {
  return (
    <Html lang={AppConfig}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
