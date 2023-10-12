// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getVideo, saveVideo } from "@/service/vid"

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getVideo()
    return res.status(200).send(products)
  } else if (req.method === "POST") {
    const { vidName, channelName, vidDes, vidComments, video, vidThumb } = req.body;
    try {
      saveVideo(vidName, channelName, vidDes, vidComments, video, vidThumb);
      return res.status(201).send({});
    }
    catch (err) {
        res.status(404).json({ error: "An error occurred while saving the video." })
      }
    }
}


