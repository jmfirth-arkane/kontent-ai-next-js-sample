import { createDeliveryClient, camelCasePropertyNameResolver, DeliveryClient } from '@kontent-ai/delivery-sdk'
import { HeroUnit, Home, contentTypes } from '../models';
import { AboutUs } from '@/models';


const sourceTrackingHeaderName = 'X-KC-SOURCE'

const client = createDeliveryClient({
  environmentId: process.env.KONTENT_PROJECT_ID || "975bf280-fd91-488c-994c-2f04416e5ee3",
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `${process.env.APP_NAME || "n/a"};${process.env.APP_VERSION || "n/a"}`,
    },
  ],
  propertyNameResolver: camelCasePropertyNameResolver
});

export async function getHeroUnit() : Promise<HeroUnit> {
  const response = await client
    .item<HeroUnit>('home_page_hero_unit')
    .toPromise()

  return (response.data.item);
}

export async function getHome(language?: string) {
  const query = client.items<Home>().type(contentTypes.home.codename);
  if (language) {
    query.languageParameter(language);
  }

  const response = await query.toPromise();
  return response.data.items[0] as Home;
}

export async function getAboutUs(language?: string) {
  const query = client.items<AboutUs>()
      .type(contentTypes.about_us.codename)
      .elementsParameter([
        'facts',
        'modular_content',
        'title',
        'description',
        'image',
      ]);

    if (language) {
      query.languageParameter(language);
    }

    const response = await query.toPromise();
    return response.data.items[0] as AboutUs;
}
