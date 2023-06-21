import { NextPage } from 'next';
import { getHome } from "@/lib/kontentClient";
import Home from '@/Templates/Home';

export interface PageProps {
  params: {
    lang: string;
  }
}

export const Page: NextPage<PageProps> = async ({ params }) => {
  const homeData = await getHome(params.lang);
  homeData.elements.articles.linkedItems = homeData.elements.articles.linkedItems.slice(0, 3);
  const homeElements = homeData.elements;

  return (<Home homeData={homeData} />);
};

export default Page;
