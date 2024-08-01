import MovieDetail from '@/components/movie-detail'
import React from 'react'
import { getMovieDetail } from '@/app/actions'

const MovieDetailPage = async ({ params } : { params: { slug: string } }) => {
  const dataMovieDetail = await getMovieDetail(params?.slug)

  return (
    <div className="w-full bg-[#222222] px-1 lg:px-20 py-10">
      <MovieDetail data={dataMovieDetail} />
    </div>
  )
}

export default MovieDetailPage