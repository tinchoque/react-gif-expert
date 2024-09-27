export const getGifs =async(category)=>{
    
    
    //const url = `https://api.giphy.com/v1/gifs/search?api_key=vEsFw1L6nnXrxhYbDd6BEB5sIo88TnQb&q=${category}&limit=5`;
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=vEsFw1L6nnXrxhYbDd6BEB5sIo88TnQb&q=${category}&limit=5`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AYbBJVDZsTrhRVaVPpGhLqYKub3vGZFT&q=${category}&limit=20`

    
    const resp = await fetch (url);
    const {data} = await resp.json();
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))
    console.log(category);
    return gifs;
}