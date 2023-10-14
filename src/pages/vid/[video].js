import { getVideo, getVideoId } from "@/service/vid";

const video = ({ videos }) => {
  return (
    <>
      <iframe width={1400} height={700} className="mx-auto" src={videos.video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    </>
  )
}

export default video


export async function getStaticPaths() {
  const data = await getVideo();

  const paths = data.map((item) => {
    return {
      params: {
        video: item.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(context) {
  const id = context.params.video;
  const data = await getVideoId(id);
  return {
    props: {
      videos: data,
    }
  }
}