import { getAnimeMovie, getRecentlyMovie, getRomanceMovie, getTrendingMovie } from '@/app/actions'
import ListMovie from '@/components/list-movie'
import RecentlyMovie from '@/components/recently-movie'
import TrendingMovie from '@/components/trending-movie'
import VideoPlayer from '@/components/video-player'

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
            "https://www.youtube.com/watch?v=NFIRWIGxWl8"
          ]}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-full h-auto bg-[#222222] px-5 lg:px-20 py-10">
        <RecentlyMovie data={dataRecently} />
        <TrendingMovie data={dataTrending} />
        <ListMovie data={dataRomance} title="Romance" viewAll="/romance" />
        <ListMovie data={dataAnime} title="Anime" viewAll="/anime" />
      </div>
    </div>
  )
}
