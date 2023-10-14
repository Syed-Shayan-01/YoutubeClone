import React from 'react'

const Filter = ({ items, searchQuery }) => {
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="flex  flex-wrap mx-auto p-2">
                    {filteredItems.map((item) => {

                        <div className="p-4 md:w-1/2 lg:w-1/3" key={item.id}>
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center  h-full w-full" src={item.vidThumb} />
                            </div>
                            <div className="flex  mt-5">
                                <a href="#" className="mr-2">
                                    <img className="channel-icon  h-10 w-10 rounded-full" src={item.vidThumb} alt="channel-icon" />
                                </a>
                                <h2 className="text-md font-medium title-font w-full sm:w-full text-gray-900">{items.vidName}</h2>
                            </div>
                            <div className="ml-12">
                                <p className="font-semibold leading-relaxed">{item.channelName}</p>
                                <div className="video-metadata text-gray-500">
                                    <span>12K views</span>
                                    <span className="mx-1">•</span>
                                    <span>1 week ago</span>
                                </div>
                            </div>
                        </div>
                    })}</div>
            </section>
        </div>
    )
}

export default Filter