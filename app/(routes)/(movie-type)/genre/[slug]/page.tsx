import { getGenreMovie } from '@/app/(routes)/actions'
import GenreMovie from '@/components/genre-movie'

const GenrePage = async ({
  params,
  searchParams,
}: {
  params: { [key: string]: string }
  searchParams: { [key: string]: string }
}) => {
  const dataGenre = await getGenreMovie(params?.slug, searchParams?.page)

  return (
    <div className="w-full min-h-screen bg-[#181818] px-5 lg:px-20 py-10">
      <GenreMovie
        data={dataGenre}
        currentPage={Number(searchParams?.page) || 1}
      />
    </div>
  )
}

export default GenrePage
