export const getExcursionInfoById = async (id: string) => {
    const commandUrl = `${process.env.SERVER_URL}/excursion/${id}`;

    const response = await fetch(commandUrl, {
        headers: {
            "X-API-KEY": process.env.API_KEY!
        },
        method: "GET",
    });

    if(!response.ok)
        throw new Error(`Error executing Backend command: ${response.statusText}`)

    return await response.json();
}