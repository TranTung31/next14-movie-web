import envConfig from '@/config'

export const getRecentlyMovie = async (page: number = 1) => {
  const res = await fetch(
    `${
      envConfig?.NEXT_PUBLIC_API_ROOT
    }/api/films/phim-moi-cap-nhat?page=${page.toString()}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  return res.json()
}

export const getTrendingMovie = async (page: number = 1) => {
  const res = await fetch(
    `${
      envConfig?.NEXT_PUBLIC_API_ROOT
    }/api/films/danh-sach/phim-dang-chieu?page=${page.toString()}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  return res.json()
}

export const getMovieDetail = async (name: string) => {
  const res = await fetch(`${envConfig?.NEXT_PUBLIC_API_ROOT}/api/film/${name}`)

  return res.json()
}

export const getMovieSearch = async (keyword: string = '', page?: string) => {
  const res = await fetch(
    `${
      envConfig?.NEXT_PUBLIC_API_ROOT
    }/api/films/search?keyword=${keyword}&page=${page || 1}`
  )

  return res.json()
}

export const getGenreMovie = async (genre: string, page: string = '1') => {
  const res = await fetch(
    `${envConfig?.NEXT_PUBLIC_API_ROOT}/api/films/the-loai/${genre}?page=${page}`
  )

  return res.json()
}

export const getCountryMovie = async (country: string, page: string = '1') => {
  const res = await fetch(
    `${envConfig?.NEXT_PUBLIC_API_ROOT}/api/films/quoc-gia/${country}?page=${page}`
  )

  return res?.json()
}

export const getYearMovie = async (year: string, page: string = '1') => {
  const res = await fetch(
    `${envConfig?.NEXT_PUBLIC_API_ROOT}/api/films/nam-phat-hanh/${year}?page=${page}`
  )

  return res.json()
}
