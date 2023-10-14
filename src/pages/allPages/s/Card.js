import React from 'react'

const Card = ({ data }) => {
    return (
        <div class='flex items-center'>
            <article class="video-container">
                <a href="#" class="thumbnail relative">
                    <img class="thumbnail-image w-full h-52 object-cover bg-gray-400" src="http://unsplash.it/250/150?gravity=center" />
                    <div class="absolute bottom-5 right-5 bg-black bg-opacity-85 text-white py-1 px-2 rounded text-xs">12:24</div>
                </a>
                <div class="video-bottom-section mt-4 flex items-start">
                    <a href="#" class="mr-2">
                        <img class="channel-icon w-9 h-9 rounded-full" src="http://unsplash.it/36/36?gravity=center" />
                    </a>
                    <div class="video-details">
                        <a href="#" class="video-title text-lg font-bold mb-2 text-black">Vid fafsdfsdfsdfafdeo Title</a>
                        <a href="#" class="video-channel-name block mb-1 text-gray-500 hover:text-black transition-colors">Channel Name</a>
                        <div class="video-metadata text-gray-500">
                            <span>12K views</span>
                            <span class="mx-1">•</span>
                            <span>1 week ago</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>

    )
}

export default Card



export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/");
    const data = await res.json(); // You need to await the JSON parsing
    return {
        props: {
            data,
        },
    };
};