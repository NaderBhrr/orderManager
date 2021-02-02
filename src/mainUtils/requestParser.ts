/*
 * The module to check and analyze the client's request to the server 
*/

// External Imports
import { ServerRequest } from "https://deno.land/std/http/server.ts";

// Utilities imports
import { throwError } from "./throwError.ts"



export const requestParser = async (req: ServerRequest) => {
    req.headers.get("content-type") !== "application/json" ? throwError(`You request's details do no match`) : null

    const decoder = new TextDecoder()
    const body = await Deno.readAll(req.body)
    const decodedBody = decoder.decode(body);
	const parsedBody: body = JSON.parse(decodedBody);
	const parsedBodyAdditional: bodyAdditional = {
		// make extrabody from parsedBody to add context to it
		...parsedBody,
		context: {
			token: req.headers.get("token"),
		},
	}

	// The function to analyze the request's body by `FastestValidator`
	const checkRequestBody = (body: bodyAdditional) => {
		const isRequestValid = check(body)

		return isRequestValid === true
		? isRequestValid
		: throwError(`${isRequestValid[0].message} is expected but ${isRequestValid[0].actual} is received`)
	}

	return req.method === "POST" &&
	req.url === "/funQL" &&
	checkRequestBody(parsedBodyAdditional)
	? parsedBodyAdditional
	: throwError(``)
}