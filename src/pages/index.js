
// import Navbar from "@/components/navbar/Navbar";
// const Home = (props) => {
//   const { data } = props

//   return (

//     <>
//       <Navbar />
//     </>
//   );
// };

// export default Home;

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/");
//   const data = await res.json(); // You need to await the JSON parsing
//   return {
//     props: {
//       data,
//     },
//   };
// };

import React from "react";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";

const DataCard = ({ data }) => {
  return (
    <div>
      {
        data.map((item) => {
          return (
            <>
              <div className="flex">
                <div className="relative w-80 h-48 mr-2 flex items-center flex-shrink-0">
                  <img
                    src={"https://fastly.picsum.photos/id/339/536/354.jpg?hmac=1r2hSWCuclyGNGdoKel-sJ7ICl-05e2Ln1LQTo65buA"}
                    className="w-full h-full object-cover md:rounded-lg"
                    alt="Thumbnail"
                  />
                </div>
                <div>
                  <div className="h-9 w-9 rounded-full overflow-hidden mb-1">
                    <img
                      className="w-full h-full object-cover"
                      src="https://fastly.picsum.photos/id/339/536/354.jpg?hmac=1r2hSWCuclyGNGdoKel-sJ7ICl-05e2Ln1LQTo65buA"
                      alt="Avatar"
                    />
                  </div>
                  <div className="leading-9 line-clamp-2">
                    {/* Add your content for the second image here */}
                  </div>
                </div>
              </div>



            </>

          )
        })
      }
    </div>
  );
};
export default DataCard;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/");
  const data = await res.json(); // You need to await the JSON parsing
  return {
    props: {
      data,
    },
  };
};