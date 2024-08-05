import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import GeneratePages from '@/lib/generate-pages'

type PaginatorProps = {
  currentPage: number
  totalPage: number
  path: string
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPage,
  path,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        {/* Button prev page */}
        {currentPage > 1 ? (
          <PaginationItem>
            <PaginationPrevious href={`${path}&page=${currentPage - 1}`} />
          </PaginationItem>
        ) : null}

        <GeneratePages
          currentPage={currentPage}
          totalPage={totalPage}
          path={path}
        />

        {/* Button next page */}
        {currentPage <= totalPage - 1 ? (
          <PaginationItem>
            <PaginationNext href={`${path}&page=${currentPage + 1}`} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  )
}

export default Paginator