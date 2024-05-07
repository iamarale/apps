export default function Quote({ isLoading, quote, category }) {
  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="mb-3 max-w-md">
            <h1 className="text-2xl font-bold">{quote?.author}</h1>
            <h3 className="text-lg">
              category: <span className="capitalize">{category}</span>
            </h3>
            <hr className="border-blue-500 border-[1px]"></hr>
          </div>

          <p>{quote?.quote}</p>
        </>
      )}
    </>
  );
}
