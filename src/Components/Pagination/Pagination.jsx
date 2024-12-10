export default function Pagination({
  // eslint-disable-next-line react/prop-types
  totalPosts,
  // eslint-disable-next-line react/prop-types
  postsPerPage,
  // eslint-disable-next-line react/prop-types
  setCurrentPage,
  // eslint-disable-next-line react/prop-types
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            className={page == currentPage ? "active" : ""}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
