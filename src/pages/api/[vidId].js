import { getVideoId } from "@/service/vid"
export default function handler(req, res) {
    if (req.method === "GET") {
        const { vidId } = req.query;
        const video = getVideoId(vidId)
        res.status(200).json(video)
    }
    else {
        res.status(404).json()
    }
}