import {
  PaginationItem,
  PaginationEllipsis,
  PaginationLink,
} from '@/components/ui/pagination'
import { useMemo } from 'react'

type GeneratePagesProps = {
  currentPage: number
  totalPage: number
  path: string
}

// Hàm render ra nội dung phân trang
const GeneratePages: React.FC<GeneratePagesProps> = ({
  currentPage,
  totalPage,
  path,
}) => {
  const result = useMemo(() => {
    const pages: JSX.Element[] = [];

    if (totalPage <= 6) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`${path}&page=${i}`}
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href={`${path}&page=${i}`}
                isActive={i === currentPage}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
        pages.push(
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        );
        pages.push(
          <PaginationItem key={totalPage}>
            <PaginationLink href={`${path}&page=${totalPage}`}>
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (currentPage > 3 && currentPage < totalPage - 2) {
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href={`${path}&page=${1}`}>{1}</PaginationLink>
          </PaginationItem>
        );
        pages.push(
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href={`${path}&page=${i}`}
                isActive={i === currentPage}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
        pages.push(
          <PaginationItem key={`...`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
        pages.push(
          <PaginationItem key={totalPage}>
            <PaginationLink href={`${path}&page=${totalPage}`}>
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        );
      } else {
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href={`${path}&page=${1}`}>{1}</PaginationLink>
          </PaginationItem>
        );
        pages.push(
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        );
        for (let i = totalPage - 4; i <= totalPage; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href={`${path}&page=${i}`}
                isActive={i === currentPage}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
    }
    
    return pages
  }, [currentPage, totalPage, path])

  return <>{result}</>
}

export default GeneratePages