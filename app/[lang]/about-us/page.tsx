import { NextPage } from 'next';
import { getAboutUs } from '@/lib/kontentClient';
import About from '@/Templates/About';

export interface PageProps {
  params: {
    lang: string;
  }
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const aboutUsData = await getAboutUs(params.lang);
  return <About aboutUsData={aboutUsData} />
};

export default Page;
