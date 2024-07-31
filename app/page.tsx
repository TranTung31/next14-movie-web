import RecentlyMovie from '@/components/recently-movie'
import VideoPlayer from '@/components/video-player'
import { getRecentlyMovie, getTrendingMovie, getRomanceMovie, getAnimeMovie } from '@/app/actions'
import TrendingMovie from '@/components/trending-movie'
import ListMovie from '@/components/list-movie'

export default async function Home() {
  const dataRecently = await getRecentlyMovie(1)
  const dataTrending = await getTrendingMovie(1)
  const dataRomance = await getRomanceMovie(1)
  const dataAnime = await getAnimeMovie(1)

  return (
    <div>
      <div className="relative pt-[56.25%]">
        <VideoPlayer
          url={[
            // "https://vimeo.com/34122764",
            "https://www.youtube.com/watch?v=NFIRWIGxWl8"
          ]}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-full h-auto bg-black px-5 lg:px-20 py-10">
        <RecentlyMovie data={dataRecently} />
        <TrendingMovie data={dataTrending} />
        <ListMovie data={dataRomance} title="Romance" viewAll="/romance" />
        <ListMovie data={dataAnime} title="Anime" viewAll="/anime" />
      </div>
    </div>
  )
}
