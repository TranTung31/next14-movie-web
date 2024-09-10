import { getCountryMovie } from '@/app/(routes)/actions'
import GenreMovie from '@/components/genre-movie'

const CountryPage = async ({
  params,
  searchParams,
}: {
  params: { [key: string]: string }
  searchParams: { [key: string]: string }
}) => {
  const countryMovie = await getCountryMovie(params?.slug, searchParams?.page)

  return (
    <div className="w-full min-h-screen bg-[#181818] px-5 lg:px-20 py-10">
      <GenreMovie
        data={countryMovie}
        currentPage={Number(searchParams?.page) || 1}
        breadCrumbTitle="Phim theo quốc gia"
      />
    </div>
  )
}

export default CountryPage
