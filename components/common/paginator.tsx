import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import GeneratePages from '@/components/common/generate-pages'

type PaginatorProps = {
  currentPage: number
  totalPage: number
  handlePageChange: any
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPage,
  handlePageChange,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        {/* Button prev page */}
        {currentPage > 1 ? (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
        ) : null}

        <GeneratePages
          currentPage={currentPage}
          totalPage={totalPage}
          handlePageChange={handlePageChange}
        />

        {/* Button next page */}
        {currentPage <= totalPage - 1 ? (
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  )
}

export default Paginator
