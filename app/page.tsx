import styles from '../styles/Home.module.css'
import { getHeroUnit } from "../lib/kontentClient";
import { NextPage } from 'next';

const Page: NextPage<{}> = async () => {
  const heroUnit = await getHeroUnit();

  return (
    <main >
      <div className={styles.hero}>
        <h1 className="append-dot">{heroUnit.elements.title.value}</h1>
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: heroUnit.elements.marketingMessage.value }}>
        </div>
      </div>
    </main>
  );
};

export default Page;
