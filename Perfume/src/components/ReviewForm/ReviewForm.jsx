import React, { useState } from 'react'
import { Star } from "lucide-react";

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [active, setActive] = useState("description")
    return (
        <div className="mb-[80px]">
            <div className="flex border-t items-center gap-x-[18px] cursor-pointer pb-[50px] font-urbanist text-[20px]">
                <p className={`p-2 w-1/2 ${active === "description" ? "border-b-2 border-blue-500 font-bold" : ""}`}
                    onClick={() => setActive("description")}>Description</p>
                <p className={`p-2 w-1/2 ${active === "review" ? "border-b-2 border-blue-500 font-bold" : ""}`}
                    onClick={() => setActive("review")}>Review</p>
            </div>

            <div className="md:mt-4">
                {active == "description" &&
                    <div>
                        <div className="font-cormot text-[35px]">Product description</div>
                        <p className="font-cormot text-[17px] pt-[15px] text-justify">
                            Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>}
                {active == "review" &&
                    <div>
                        <div className="w-full mx-auto border p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">
                                Be the first to review <span className="font-bold">“Cool Blue Parfum”</span>
                            </h2>
                            <p className="text-sm text-gray-600">
                                Your email address will not be published. Required fields are marked *
                            </p>

                            {/* Star Rating System */}
                            <div className="mt-4">
                                <p className="text-sm font-semibold">Your rating *</p>
                                <div className="flex gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={20}
                                            className={`cursor-pointer ${(hover || rating) >= star ? "text-yellow-500" : "text-gray-400"
                                                }`}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(0)}
                                            onClick={() => setRating(star)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Review Input */}
                            <div className="mt-4">
                                <label className="text-sm font-semibold" htmlFor="review">
                                    Your review *
                                </label>
                                <textarea
                                    id="review"
                                    rows="4"
                                    className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
                                    placeholder="Write your review here..."
                                ></textarea>
                            </div>

                            {/* Name & Email Fields */}
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-semibold" htmlFor="name">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold" htmlFor="email">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            {/* Save Checkbox */}
                            <div className="mt-4 flex items-center gap-2">
                                <input type="checkbox" id="saveInfo" className="w-4 h-4" />
                                <label htmlFor="saveInfo" className="text-sm">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                                Submit
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ReviewForm