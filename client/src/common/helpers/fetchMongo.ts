const urlForRequest = process.env.SERVER_URL;

export async function fetchMongo(...args: (string | number)[]) {
    const commandUrl = `${urlForRequest}/${args.join('/')}`;

    const response = await fetch(commandUrl, {
        headers: {
            "X-API-KEY": process.env.API_KEY!
        },
        method: "GET",
        cache: 'no-store'
    });

    if(!response.ok)
        throw new Error(`Error executing Backend command: ${response.statusText}`)

    const data = await response.json();
    return data;
}