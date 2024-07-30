import Header from '@/components/header'
import RecentlyMovie from '@/components/recently-movie'
import VideoPlayer from '@/components/video-player'
import { getRecentlyMovie } from '@/app/actions'

export default async function Home() {
  const dataRecently = await getRecentlyMovie(1)

  return (
    <div>
      <Header />
      <div className="relative pt-[56.25%] mb-10">
        <VideoPlayer
          url={[
            // "https://vimeo.com/34122764",
            "https://www.youtube.com/watch?v=NFIRWIGxWl8",
          ]}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>
      <RecentlyMovie data={dataRecently} />
    </div>
  );
}
