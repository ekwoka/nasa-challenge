const NASA_KEY = 'wu2BhPbZk7bhhlw2gWr9xDXoJpzzgCPbva0dYgTh'

export async function fetchAPOD(count=10){
    try {
        let response = await fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${NASA_KEY}`)
        let data = (await response.json()).filter(i=>i.media_type=='image')
        return data
    } catch(e) {
        return {error:e}
    }
}

export function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }