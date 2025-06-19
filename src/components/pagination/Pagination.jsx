export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4 p-5 flex justify-end space-x-2 ">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>&lt; السابق</button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded  cursor-pointer ${
            page === currentPage
              ? "bg-[#0045ab] text-white"
              : "bg-white text-[#0045ab] border border-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button className="cursor-pointer" onClick={() => onPageChange(currentPage + 1)}>التالي &gt;</button>
      )}
    </div>
  );
}
