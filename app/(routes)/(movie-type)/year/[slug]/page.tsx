import { getYearMovie } from '@/app/(routes)/actions'
import GenreMovie from '@/components/genre-movie'

const MovieOfYearPage = async ({
  params,
  searchParams,
}: {
  params: { [key: string]: string }
  searchParams: { [key: string]: string }
}) => {
  const movieOfYear = await getYearMovie(params?.slug, searchParams?.page)

  return (
    <div className="w-full min-h-screen bg-[#181818] px-1 lg:px-20 py-10">
      <GenreMovie
        data={movieOfYear}
        currentPage={Number(searchParams?.page) || 1}
        breadCrumbTitle={`Phim của năm ${params?.slug}`}
      />
    </div>
  )
}

export default MovieOfYearPage
