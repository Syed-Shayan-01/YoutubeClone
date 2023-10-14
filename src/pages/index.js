/* eslint-disable @next/next/no-img-element */
import Category from "@/components/category/Category";
import Navbar from "@/components/navbar/Navbar";
import { getVideo } from "@/service/vid";
import Link from "next/link";
import { useState } from "react";
const Home = (props) => {
  const { data } = props
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  // add search filter
  const filteredItems = data.filter((video) => video.vidName && video.vidName.toLowerCase().includes(searchQuery.toLowerCase()));
  return (

    <>
      <Navbar handleSearch={handleSearch} />
      <Category />
      <section className="text-gray-600 body-font">
        <div className="flex  flex-wrap mx-auto p-2">
          {filteredItems.map((video) => {
            return (
              <div className="p-4 md:w-1/2 lg:w-1/3" key={video.id}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <Link href={`./vid/${video.id}`}> <img alt="content" className="object-cover object-center  h-full w-full" src={video.vidThumb} /></Link>
                </div>
                <div className="flex  mt-5">
                  <a href="#" className="mr-2">
                    <img className="channel-icon  h-10 w-10 rounded-full" src={video.vidThumb} alt="channel-icon" />
                  </a>
                  <h2 className="text-md font-medium title-font w-full sm:w-full text-gray-900">{video.vidName}</h2>
                </div>
                <div className="ml-12">
                  <p className="font-semibold leading-relaxed">{video.channelName}</p>
                  <div className="video-metadata text-gray-500">
                    <span>12K views</span>
                    <span className="mx-1">•</span>
                    <span>1 week ago</span>
                  </div>
                </div>
              </div>
            )
          })}</div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getVideo();
  return {
    props: {
      data,
    },
  };
};

