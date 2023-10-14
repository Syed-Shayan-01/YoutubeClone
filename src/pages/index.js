
import Navbar from "@/components/navbar/Navbar";
const Home = (props) => {
  const { data } = props

  return (

    <>
      <Navbar />
      <div className="p-4 border-t border-b">
        <div className="flex flex-wrap justify-center -mx-2">
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 active:bg-gray-900 active:text-white active:border-gray-900">All</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 1</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 2</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 3</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 4</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 5</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 6</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 7</button>
          <button className="mx-2 mb-2 whitespace-no-wrap border rounded-md text-white bg-black py-2 px-4 text-base cursor-pointer transition duration-150 hover:bg-gray-400">Category 8</button>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="flex  flex-wrap mx-auto p-10">
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

