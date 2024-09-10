import { getMovieSearch } from '@/app/(routes)/actions'
import MovieSearch from '@/components/movie-search'

const MovieSearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) => {
  const dataSearch = await getMovieSearch(
    searchParams?.keyword,
    searchParams?.page
  )

  return (
    <div className="w-full min-h-screen bg-[#181818] px-5 lg:px-20 py-10">
      <MovieSearch
        data={dataSearch}
        currentPage={Number(searchParams?.page) || 1}
      />
    </div>
  )
}

export default MovieSearchPage
