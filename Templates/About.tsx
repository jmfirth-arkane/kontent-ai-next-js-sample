'use client';

import React from 'react';
import Metadata from '../Components/Metadata';
import RichText from '../Components/RichText';
import { useIntl } from 'react-intl';
import { AboutUs as AboutUsType } from '../Models/content-types/about_us';
import { FactAboutUs } from '../Models/content-types/fact_about_us';
import Image from 'next/image';

interface AboutProps {
  aboutUsData: AboutUsType;
}

const About: React.FC<AboutProps> = async ({ aboutUsData }) => {
  const { locale: language, formatMessage } = useIntl();

  const factsComponent =
    aboutUsData.elements.facts.linkedItems &&
    aboutUsData.elements.facts.linkedItems.map(
      (fact: FactAboutUs, index: number) => {
        const title =
          fact.elements.title.value.trim().length > 0
            ? fact.elements.title.value
            : formatMessage({ id: 'About.noTitleValue' });

        const descriptionElement =
          fact.elements.description.value !== '<p><br></p>' ? (
            <RichText
              className="text-and-image-text"
              element={fact.elements.description}
            />
          ) : (
            <p className="text-and-image-text">
              {formatMessage({ id: 'About.noDescriptionValue' })}
            </p>
          );

        const imageLink =
          fact.elements.image.value[0] !== undefined ? (
            <Image
              alt={title}
              className="img-responsive"
              src={fact.elements.image.value[0].url}
              title={title}
              width={539}
              height={359}
            />
          ) : (
            <div className="img-responsive placeholder-tile-image">
              {formatMessage({ id: 'About.noTeaserValue' })}
            </div>
          );

        if (index % 2 === 0) {
          return (
            <section className="row text-and-image" key={index}>
              <h2 className="col-lg-12">{title}</h2>
              <div className="col-md-6">{descriptionElement}</div>
              <div className="col-md-6">{imageLink}</div>
            </section>
          );
        }

        return (
          <section className="row text-and-image" key={index}>
            <h2 className="col-lg-12">{title}</h2>
            <div className="col-md-6 col-md-push-6">{descriptionElement}</div>
            <div className="col-md-6 col-md-pull-6">{imageLink}</div>
          </section>
        );
      }
    );

  // const metaDataElements = metadata[language]?.elements || {};

  return (
    <div className="container">
      {/* <Metadata
        title={metaDataElements.metadataMetaTitle}
        description={metaDataElements.metadataMetaDescription}
        ogTitle={metaDataElements.metadataOgTitle}
        ogImage={metaDataElements.metadataOgImage}
        ogDescription={metaDataElements.metadataOgDescription}
        twitterTitle={metaDataElements.metadataMetaTitle}
        twitterSite={metaDataElements.metadataTwitterSite}
        twitterCreator={metaDataElements.metadataTwitterCreator}
        twitterDescription={metaDataElements.metadataTwitterDescription}
        twitterImage={metaDataElements.metadataTwitterImage}
      /> */}
      {factsComponent}
    </div>
  );
};

export default About;
