import BookList from "@/components/BookList/BookList";
import BookOverview from "@/components/BookOverview/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks} // Corrected the prop name to 'books'
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
