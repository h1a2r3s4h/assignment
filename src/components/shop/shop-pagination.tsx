type ShopPaginationProps = {
  currentPage?: number;
  totalPages?: number;
};

export default function ShopPagination({
  currentPage = 1,
  totalPages = 3,
}: ShopPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center gap-[18px] px-4 pb-[85px] md:px-8 lg:px-[100px]">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              className={
                isActive
                  ? "flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-[#B88E2F] text-[20px] font-normal leading-[150%] text-white"
                  : "flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-[#F9F1E7] text-[20px] font-normal leading-[150%] text-black transition-opacity hover:opacity-80"
              }
            >
              {page}
            </button>
          );
        })}

        <button className="flex h-[60px] min-w-[98px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-7 text-[20px] font-normal leading-[150%] text-black transition-opacity hover:opacity-80">
          Next
        </button>
      </div>
    </section>
  );
}