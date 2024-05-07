import { useEffect, useState } from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Button from "./components/Ui/Button";
import AllCategory from "./components/AllCategory";

export default function App() {
  const [category, setCategory] = useState<string | null>("age");
  const [quote, setQuote] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchQuote() {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          method: "GET",
          headers: { "X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setIsLoading(false);
      setQuote(data[0]);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, [category]);

  // if (error) return <h1>You've gotten an error lol..</h1>;
  return (
    <div className="h-full ">
      <Header />
      <div className="container mx-auto p-3  rounded border-2 border-blue-500">
        {!error ? (
          <>
            <Quote isLoading={isLoading} category={category} quote={quote} />

            <Button
              className="bg-blue-500 px-2 py-1 rounded mt-1 duration-150 hover:bg-opacity-80"
              onClick={() => fetchQuote()}
            >
              New Quote
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">
              There was an error calling the API...
            </h1>
            <h3 className="text-lg">Error Message: {error}</h3>
            <Button
              className="bg-red-500 px-2 py-1 rounded mt-1 duration-150 hover:bg-opacity-80"
              onClick={() => fetchQuote()}
            >
              Fetch again...
            </Button>
          </>
        )}
      </div>
      <div className="flex">
        <h1>Select a category:</h1>
        <AllCategory setCategory={setCategory} />
      </div>
    </div>
  );
}
