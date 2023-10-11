import NoteContext from "./NoteContext"
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineWatchLater, MdSlowMotionVideo, MdVideoLibrary } from "react-icons/md";
import { GoHistory, GoVideo } from 'react-icons/go'
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { BiCut } from 'react-icons/bi'
import { FaFireAlt } from 'react-icons/fa'
import { IoMusicalNoteOutline } from 'react-icons/io'
import { SiYoutubegaming } from 'react-icons/si'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { BsCupFill } from "react-icons/bs";

const Items = [
    {
        id: 1,
        name: "Home",
        icon: <AiOutlineHome />
    },
    {
        id: 2,
        name: "Shorts",
        icon: <MdSlowMotionVideo />
    },
    {
        id: 3,
        name: "Subcriptions",
        icon: <BsCollectionPlay />
    },
    {
        id: 4,
        name: "Library",
        icon: <MdVideoLibrary />
    },
    {
        id: 5,
        name: "History",
        icon: <GoHistory />
    },
    {
        id: 6,
        name: "Your Videos",
        icon: <GoVideo />
    },
    {
        id: 7,
        name: "Watch later",
        icon: <MdOutlineWatchLater />
    },
    {
        id: 8,
        name: "Your Clips",
        icon: <BiCut />
    },
    {
        id: 9,
        name: "Liked Videos",
        icon: <AiOutlineLike />
    },
    {
        id: 10,
        name: "Trending",
        icon: <FaFireAlt />
    }, {
        id: 11,
        name: "Music",
        icon: <IoMusicalNoteOutline />
    },
    {
        id: 12,
        name: "Gaming",
        icon: <SiYoutubegaming />
    }, {
        id: 13,
        name: "News",
        icon: <HiOutlineNewspaper />
    },
    {
        id: 14,
        name: "Sports",
        icon: <BsCupFill />
    }
];


const NoteState = (props) => {
    return (
        <NoteContext.Provider value={Items}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState