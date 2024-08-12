import { groq } from "next-sanity";

export const getFeaturedSpaQuery = groq`*[_type == "goldenView" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage
}`;


export const getSpasQuery = groq`*[_type == "goldenView"] {
    _id, 
    coverImage,
    description,
    dimension,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    type
}`;


export const getSpa = groq`*[_type == "goldenView" && slug.current == $slug][0] {
    _id,
    coverImage,
    description,
    discount,
    images,
    isBooked,
    isFeatured,
    name,
    offeredAmenities,
    price,
    slug,
    specialNote,
    type
}`;


export const getUserBookingsQuery = groq`*[_type == 'booking' && user._ref == $userId] {
    _id,
    goldenView -> {
        _id,
        name,
        slug,
        price
    },
    checkinDate,
    checkoutDate,
    numberOfDays,
    totalPrice,
    discount
}`;

export const getUserDataQuery = groq`*[_type == 'user' && _id == $userId][0] {
    _id,
    name,
    email,
    isAdmin,
    about,
    _createdAt,
    image,
}`;

export const getSpaReviewsQuery = groq`*[_type == "review" && goldenView._ref == $spaId] {
    _createdAt,
    _id,
    text,
    user -> {
        name
    },
    userRating
}`;
