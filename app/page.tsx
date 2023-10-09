import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import getTrendingAnime from '@/lib/getTrendingAnime'


export default async function Home() {
  const data: Promise<AnimeType> = getTrendingAnime()
  const trendingAnime = await data

    // console.log(trendingAnime['data'])
  return (
    
    <main className={styles.main} >
      <article>
          <h3>Trending Anime</h3>
      </article>
      <section className={styles.post} >
        {trendingAnime['data'].map((data) => {
          return(
            <div key={data.id} className={styles.postsection} >
              <div className={styles.image}>
                <Image 
                  src={data.attributes.posterImage.small}
                  width={data.attributes.posterImage.meta.dimensions.small.width}
                  height={data.attributes.posterImage.meta.dimensions.small.height}
                  alt={data.attributes.canonicalTitle}
                />
              </div>
              <article className={styles.article} >
                <p>{data.attributes.titles.en}</p>
                <p>{data.type}</p>
                <p>{data.attributes.synopsis}</p>
              </article>
            </div>
            )
          })}
      </section>
    </main>
  )
}
