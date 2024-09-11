import {
  getGenreMovie,
  getRecentlyMovie,
  getTrendingMovie,
} from '@/app/(routes)/actions'
import ListMovie from '@/components/list-movie'
import RecentlyMovie from '@/components/recently-movie'
import TrendingMovie from '@/components/trending-movie'
import VideoPlayer from '@/components/video-player'

export default async function Home() {
  const dataRecently = await getRecentlyMovie(1)
  const dataTrending = await getTrendingMovie(1)
  const dataRomance = await getGenreMovie('tinh-cam')
  const dataAnime = await getGenreMovie('hoat-hinh')

  return (
    <div>
      <div className="relative pt-[56.25%]">
        <VideoPlayer
          url={['https://www.youtube.com/watch?v=NFIRWIGxWl8']}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-full h-auto bg-[#181818] px-5 md:px-20 pt-5 md:py-10">
        <RecentlyMovie data={dataRecently} />
        <TrendingMovie data={dataTrending} />
        <ListMovie
          data={dataRomance}
          title="Phim tình cảm"
          viewAll="/genre/tinh-cam?page=1"
        />
        <ListMovie
          data={dataAnime}
          title="Anime"
          viewAll="/genre/hoat-hinh?page=1"
        />
      </div>
    </div>
  )
}
