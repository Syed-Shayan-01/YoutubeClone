
import handler from "../api";

const Card = ({ data }) => {
  return (
    <>
      {data?.map((video) => {
        <section key={video?.videoId}>
          <div className="aspect-w-16 aspect-h-9">
            <video
              src={video?.video}
              className="w-full md:w-[60%]  h-auto md:h-full rounded"
              loop
              autoPlay
              muted
              playsInline // Add this to make it work on iOS
            >
              Hello
            </video>
          </div>
        </section>;
      })}
    </>
  );
};

export default Card;
export async function getStaticProps() {
  try {
    const response = await fetch(handler);
    const data = await response.json();
    console.log(data); // Log the data

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
