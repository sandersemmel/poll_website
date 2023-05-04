export const createPollURL = ""; // TODO CHAGNE
export const fetchPollStatusURL = "";
export const fetchAllPollsURL = "";

export async function sendPOST(url: string, jsonBODY: string) {

    let response = await fetch(url, {
        body: jsonBODY,
        method: "POST"
    })
    return await response.json();
}

export async function sendGET(url: string) {

    let response = await fetch(url)
    return await response.json();
}
