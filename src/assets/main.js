const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCq7k_5OoHa3hDwjjOFMoxDA&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50d569ad64mshc39f928ed011444p1a5e8djsn39bb0964e777',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi, optionsApi) {
  const response = await fetch(urlApi, optionsApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `
    ${videos.items.map(video => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.description}
      </h3>
    </div>
  </div>
    
        `).slice(0,4).join('')}  
    `;
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
