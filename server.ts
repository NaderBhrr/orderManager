import { serve } from "https://deno.land/std/http/server.ts";

const responseHeader: Headers = new Headers();

responseHeader.append("Contnet-Type", "application/json");

const server = serve({ port: 8000 });
console.log(`The server: http://localhost:8000`)

type model = "Testing" | "Center"


for await (const req of server) {
    try {
        const response: () => Promise<any> = async () => {
            const {
              wants: { model, doit },
              details,
              context
            } = await requestParser(req);

       req.respond({
           body: JSON.stringify({
               success: true,
               body: await response()
           }),
           status: 200,
           header: responseHeader
       })
    } catch (error) {
        req.respond({
            body: JSON.stringify({
                success: false,
                body: error.message || `No valid request to the server yet ...`
            }),
            status: 500,
            headers: responseHeader
        })
    }
}


