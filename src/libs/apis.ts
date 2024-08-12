import axios from "axios";
import { CreateBookingDto, Spa } from "../models/spa";
import sanityClient from "./sanity";
import * as queries from './sanityQueries';
import { CreateReviewDto, Review, UpdateReviewDto } from "@/models/review";
import { Booking } from "@/models/booking";

export async function getFeaturedSpa() {
    const result = await sanityClient.fetch<Spa>(
        queries.getFeaturedSpaQuery,
        {},
        { cache: 'no-cache' }
    );

    return result;
}

export async function getSpas() {
    const result = await sanityClient.fetch<Spa[]>(
        queries.getSpasQuery,
        {},
        { cache: 'no-cache' }
    );
    return result;
}

export async function getSpa(slug: string) {
    const result = await sanityClient.fetch<Spa>(
        queries.getSpa,
        { slug },
        { cache: 'no-cache' }
    );

    return result;
}


export const createBooking = async ({
    checkinDate,
    checkoutDate,
    discount,
    goldenView,
    numberOfDays,
    totalPrice,
    user,
}: CreateBookingDto) => {
    const mutation = {
        mutations: [
            {
                create: {
                    _type: 'booking',
                    user: { _type: 'reference', _ref: user },
                    goldenView: { _type: 'reference', _ref: goldenView },
                    checkinDate,
                    checkoutDate,
                    numberOfDays,
                    totalPrice,
                    discount,
                },
            },
        ],
    };

    const { data } = await axios.post(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        mutation,
        { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
    );

    return data;
};

export const updateGoldenView = async (goldenViewId: string) => {
    const mutation = {
        mutations: [
            {
                patch: {
                    id: goldenViewId,
                    set: {
                        isBooked: true,
                    },
                },
            },
        ],
    };

    const { data } = await axios.post(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        mutation,
        { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
    );

    return data;
};




export async function getUserData(userId: string) {
    const result = await sanityClient.fetch(
        queries.getUserDataQuery,
        { userId },
        { cache: 'no-cache' }
    );

    return result;
}

export async function checkReviewExists(
    userId: string,
    goldenViewId: string
): Promise<null | { _id: string }> {
    const query = `*[_type == 'review' && user._ref == $userId && goldenView._ref == $goldenViewId][0] {
    _id
  }`;

    const params = {
        userId,
        goldenViewId,
    };

    const result = await sanityClient.fetch(query, params);

    return result ? result : null;
}

export const updateReview = async ({
    reviewId,
    reviewText,
    userRating,
}: UpdateReviewDto) => {
    const mutation = {
        mutations: [
            {
                patch: {
                    id: reviewId,
                    set: {
                        text: reviewText,
                        userRating,
                    },
                },
            },
        ],
    };

    const { data } = await axios.post(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        mutation,
        { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
    );

    return data;
};

export async function getUserBookings(userId: string) {
    const result = await sanityClient.fetch<Booking[]>(
        queries.getUserBookingsQuery,
        {
            userId,
        },
        { cache: 'no-cache' }
    );

    return result;
}

export const createReview = async ({
    goldenViewId,
    reviewText,
    userId,
    userRating,
}: CreateReviewDto) => {
    const mutation = {
        mutations: [
            {
                create: {
                    _type: 'review',
                    user: {
                        _type: 'reference',
                        _ref: userId,
                    },
                    goldenView: {
                        _type: 'reference',
                        _ref: goldenViewId,
                    },
                    userRating,
                    text: reviewText,
                },
            },
        ],
    };

    const { data } = await axios.post(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        mutation,
        { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
    );

    return data;
};

export async function getSpaReviews(spaId: string) {
    const result = await sanityClient.fetch<Review[]>(
        queries.getSpaReviewsQuery,
        {
            spaId,
        },
        { cache: 'no-cache' }
    );

    return result;
}
