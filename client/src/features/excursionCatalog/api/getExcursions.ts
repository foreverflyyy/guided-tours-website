export const getExcursion = async () => {
    const commandUrl = `${process.env.SERVER_URL}/excursion`;

    const response = await fetch(commandUrl, {
        headers: {
            "X-API-KEY": process.env.API_KEY!
        },
        method: "GET",
        cache: "no-cache"
    });

    if(!response.ok)
        throw new Error(`Error executing Backend command: ${response.statusText}`)

    return await response.json();
}