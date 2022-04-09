import cookie from "cookie";
import { v4 as uuid } from "@lukeed/uuid";

export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.cookie || "");
  event.locals.userid = cookies.userid || uuid();

  if (event.url.searchParams.has("_method")) {
    event.method = event.url.searchParams.get("_method").toUpperCase();
  }

  const response = await resolve(event);

  if (!cookies.userid) {
    response.headers[
      "set-cookie"
    ] = `userid=${event.locals.userid}; Path=/; HttpOnly`;
  }

  return response;
};
