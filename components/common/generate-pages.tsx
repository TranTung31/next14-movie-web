import {
  PaginationItem,
  PaginationEllipsis,
  PaginationLink,
} from '@/components/ui/pagination'
import { useMemo } from 'react'

type GeneratePagesProps = {
  currentPage: number
  totalPage: number
  handlePageChange: any
}

// Hàm render ra nội dung phân trang
const GeneratePages: React.FC<GeneratePagesProps> = ({
  currentPage,
  totalPage,
  handlePageChange,
}) => {
  const result = useMemo(() => {
    const pages: JSX.Element[] = [];

    if (totalPage <= 6) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
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
                onClick={() => handlePageChange(i)}
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
            <PaginationLink onClick={() => handlePageChange(totalPage)}>
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (currentPage > 3 && currentPage < totalPage - 2) {
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink onClick={() => handlePageChange(1)}>
              {1}
            </PaginationLink>
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
                onClick={() => handlePageChange(i)}
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
            <PaginationLink onClick={() => handlePageChange(totalPage)}>
              {totalPage}
            </PaginationLink>
          </PaginationItem>
        );
      } else {
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink onClick={() => handlePageChange(1)}>
              {1}
            </PaginationLink>
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
                onClick={() => handlePageChange(i)}
                isActive={i === currentPage}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
    }

    return pages;
  }, [currentPage, totalPage]);

  return <>{result}</>;
};

export default GeneratePages