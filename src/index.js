import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function getBrowserLang() {
  return navigator.language || navigator.userLanguage;
}

function getLocale() {
  const lang = getBrowserLang();
  if (lang === "en") {
    return localeEnMessages;
  } else {
    return localeEsMessages;
  }
}

ReactDOM.render(
  <IntlProvider locale={getBrowserLang()} messages={getLocale()}>
    <JobsList></JobsList>
  </IntlProvider>,
  document.getElementById("root")
);
