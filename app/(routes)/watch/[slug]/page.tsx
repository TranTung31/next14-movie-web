import { getMovieDetail } from '@/app/(routes)/actions'
import MovieWatch from '@/components/movie-watch'
import React from 'react'

const MovieWatchPage = async ({ params }: { params: { slug: string } }) => {
  const dataMovieDetail = await getMovieDetail(params?.slug)

  return (
    <div className="w-full bg-[#181818] px-5 py-10 lg:px-20 text-white">
      <MovieWatch data={dataMovieDetail} />
    </div>
  )
}

export default MovieWatchPage
