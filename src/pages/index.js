
import Category from "@/components/category/Category";
import Filter from "@/components/filterVidPage/Filter";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
const Home = (props) => {
  const { data } = props
 const items = data.map((item) =>{item.vidName})
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (

    <>
      <Navbar handleSearch={handleSearch} />
      <Category />

      <section className="text-gray-600 body-font">
        <div className="flex  flex-wrap mx-auto p-2">
          {
            data?.map((items) => (
              <div className="p-4 md:w-1/2 lg:w-1/3" key={items.id}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center  h-full w-full" src={items.vidThumb} />
                </div>
                <div className="flex  mt-5">
                  <a href="#" className="mr-2">
                    <img className="channel-icon  h-10 w-10 rounded-full" src={items.vidThumb} alt="channel-icon" />
                  </a>
                  <h2 className="text-md font-medium title-font w-full sm:w-full text-gray-900">{items.vidName}</h2>
                </div>
                <div className="ml-12">
                  <p className="font-semibold leading-relaxed">{items.channelName}</p>
                  <div className="video-metadata text-gray-500">
                    <span>12K views</span>
                    <span className="mx-1">•</span>
                    <span>1 week ago</span>
                  </div>
                </div>
              </div>
            ))
          }

          <Filter items={items} searchQuery={searchQuery} />
        </div>
      </section>

    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/");
  const data = await res.json(); // You need to await the JSON parsing
  return {
    props: {
      data,
    },
  };
};

