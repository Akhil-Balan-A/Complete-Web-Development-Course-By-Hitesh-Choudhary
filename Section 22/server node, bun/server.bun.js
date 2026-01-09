import { serve } from "bun";

serve({
    port: 4000,
    hostname: '127.0.0.1',
    fetch: (req) => {
        const url = new URL(req.url)
        if (url.pathname === '/') {
            return new Response('Hello World', {
                status: 200,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        } else if (url.pathname === '/about') {
            return new Response('About Page', {
                status: 200,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        } else {
            return new Response('404 Not Found!', {
                status: 404,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        }
    },
    
});
console.log(`Server running at http://127.0.0.1:4000/`);

