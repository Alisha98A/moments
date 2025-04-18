import { rest } from "msw";

const baseURL = "https://drf-api-rec.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 62,
        username: "alisha",
        email: "",
        first_name: "",
        last_name: "",
        profile: {
        id: 61,
        owner: "alisha",
        created_at: "17 Apr 2025",
        updated_at: "17 Apr 2025",
        name: "",
        content: "",
        image: "https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_qdjgyp",
        is_owner: true,
        following_id: null,
        posts_count: 4,
        followers_count: 0,
        following_count: 4
        },
        profile_id: 61,
        profile_image: "https://res.cloudinary.com/dgjrrvdbl/image/upload/v1/media/../default_profile_qdjgyp"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];