import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), "src", "data", "vid.json");


export function getVideo() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getVideoId(id) {
    const data = getVideo();
    return data.find(p => p.id === Number(id))
}


export async function saveVideo(vidName, channelName, vidDes, vidComments, video, vidThumb) {
    const data = getVideo();
    data.push({
        id: data.length + 1,
        vidName, channelName, vidDes, vidComments, video, vidThumb
    });
    fs.writeFileSync(filePath, JSON.stringify(data))
}