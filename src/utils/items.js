import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineWatchLater, MdSlowMotionVideo, MdVideoLibrary } from "react-icons/md";
import { GoHistory, GoVideo } from 'react-icons/go'
const { AiOutlineHome, AiOutlineLike } = require("react-icons/ai");
const { BiCut } = require('react-icons/bi')
import { FaFireAlt } from 'react-icons/fa'
import { IoMusicalNoteOutline } from 'react-icons/io'
import { SiYoutubegaming } from 'react-icons/si'
import { HiOutlineNewspaper } from 'react-icons/hi'
export const items = [
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
        id: 6,
        name: "Watch later",
        icon: <MdOutlineWatchLater />
    },
    {
        id: 6,
        name: "Your Clips",
        icon: <BiCut />
    },
    {
        id: 6,
        name: "Liked Videos",
        icon: <AiOutlineLike />
    },
];




export const explore = [
    {
        id: 1,
        name: "Trending",
        icon: <FaFireAlt />
    }, {
        id: 2,
        name: "Music",
        icon: <IoMusicalNoteOutline />
    },
    {
        id: 3,
        name: "Gaming",
        icon: <SiYoutubegaming />
    }, {
        id: 4,
        name: "News",
        icon: <HiOutlineNewspaper />
    },

]