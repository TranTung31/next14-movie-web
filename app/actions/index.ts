const API_ROOT = 'https://phim.nguonc.com'

export const getRecentlyMovie = async (page: number = 1) => {
  const res = await fetch(`${API_ROOT}/api/films/phim-moi-cap-nhat?page=${page.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  return res.json()
}

export const getTrendingMovie = async (page: number = 1) => {
  const res = await fetch(`${API_ROOT}/api/films/danh-sach/phim-dang-chieu?page=${page.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  return res.json()
}

export const getRomanceMovie = async (page: number = 1) => {
  const res = await fetch(`${API_ROOT}/api/films/the-loai/tinh-cam?page=${page.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  return res.json()
}

export const getAnimeMovie = async (page: number = 1) => {
  const res = await fetch(`${API_ROOT}/api/films/the-loai/hoat-hinh?page=${page.toString()}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  return res.json()
}