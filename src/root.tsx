import { Slot, component$, useVisibleTask$, $ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export const MyProvider = component$(() => {
  useVisibleTask$(() => {
    console.log("VISIBLE")
  }, { strategy: 'document-ready' });
  return <Slot />
});

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <MyProvider>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
          <ServiceWorkerRegister />
        </head>
        <body lang="en">
          <RouterOutlet />
        </body>
      </QwikCityProvider>
    </MyProvider>
  );
});
