'use client';

import * as React from "react";
import { IntlProvider } from "react-intl";
import { localizationObject } from "../Utilities/LocalizationLoader";
import Header from "./Header";
import { useRouter, usePathname, useParams } from 'next/navigation';
import languageCodes, { defaultLanguage } from "@/Utilities/LanguageCodes";

export type SetLanguageType = (newLanguage: string, newUrl?: string) => void;

interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const params = useParams()
  const [lang, setLang] = React.useState(params.lang || defaultLanguage);

  const setLanguageCode: SetLanguageType = (newLanguage, newUrl) => {
    setLang(newLanguage);
  };

  return (
    <div>
      <IntlProvider locale={lang} messages={localizationObject[lang]}>
        <div className="application-content">
          <Header changeLanguage={setLanguageCode} />
          {children}
        </div>
      </IntlProvider>
    </div>
  );
};

export default Layout;
