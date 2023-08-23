export const getExcursions = async () => {
    const commandUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/excursion`;

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