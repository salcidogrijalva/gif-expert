export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=KB673Lrp8p5gSBT7dRTZmLPDMOkIWawx`;
    const request = await fetch(url);
    const response = await request.json();

    const gifs = response.data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })
    
    return gifs;
}