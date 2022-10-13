export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1b65338d11msh4b72bd5edb1f756p11ac7ajsn20245fb6dfea',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b65338d11msh4b72bd5edb1f756p11ac7ajsn20245fb6dfea',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data;
}