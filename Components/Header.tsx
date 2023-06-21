'use client';

import React from 'react';
import Link from 'next/link';
import languageCodes, { englishCode, spanishCode } from '../Utilities/LanguageCodes';
import MessageBox from './MessageBox';
import { ParsedQs } from 'qs';
import { useIntl } from 'react-intl';
import { SetLanguageType } from './Layout';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  message?: string | ParsedQs | string[] | ParsedQs[] | undefined;
  changeLanguage: SetLanguageType;
}

const Header: React.FC<HeaderProps> = (props) => {
  const messageBox = props.message && <MessageBox message={props.message} />;
  const { locale: language = '', formatMessage } = useIntl();
  const pathname = usePathname();

  const getUrl = (lang: string) => {
    const urlParts = pathname.split('/');
    const currentLanguage = pathname.split('/')[1];
    if (languageCodes.indexOf(currentLanguage) > -1) {
      urlParts[1] = lang;
    } else {
      urlParts.splice(1, 0, lang);
    }
    return urlParts.join('/');
  };

  return (
    <header className="header" role="banner">
      <div className="menu">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link href={`/${language}`}>
                  {formatMessage({ id: 'Header.homeLinkTitle' })}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/store`}>
                  {formatMessage({ id: 'Header.storeLinkTitle' })}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/articles`}>
                  {formatMessage({ id: 'Header.articlesLinkTitle' })}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/about-us`}>
                  {formatMessage({ id: 'Header.aboutLinkTitle' })}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/cafes`}>
                  {formatMessage({ id: 'Header.cafesLinkTitle' })}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/contacts`}>
                  {formatMessage({ id: 'Header.contactsLinkTitle' })}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="additional-menu-buttons user-menu">
            <nav>
              <ul className="dropdown-items-list dropdown-desktop-visible">
                <li>
                  <a href={getUrl('en-US')}>English</a>
                </li>
                <li>
                  <a href={getUrl('es-ES')}>Español</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {messageBox}
      <div className="header-row">
        <div className="container">
          <div className="col-xs-8 col-md-8 col-lg-4 logo">
            <h1 className="logo">
              <Link href={`#`} className="logo-link">
                Dancing Goat
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
