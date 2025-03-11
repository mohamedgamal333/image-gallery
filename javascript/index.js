const apiKey='nc88PYD2Z89knHQq3jlvQcL6CeaLVV9Xd6Qm6e7zqCHaz8toV5Hx5eeh';
const perPage =15;
let currentPage = 1;
const generateHtml =(image)=>{
    Image.map(img=> 
        ` <li class="card">
                <img src="${img.src.large2x}" alt="first image">
                <div class="details">
                    <div class="photographer">
                        <i class="fa-solid fa-camera"></i>
                        <span>${img.photographer}</span>
                    </div>
                    <button><i class="fa-solid fa-download"></i></button>
                </div>
            </li>`
    ).join('');
}
// fetch image by calling api from pexels with authorization key
const getImages=(apiUrl)=>{
    fetch(apiUrl,{
        
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    }).then(Response=>Response.json()).then (data=>{
        console.log(data);
        // let output = '';
        // data.photos.forEach(photo=>{
        //     output += `<img src="${photo.src.large}" alt="${photo.photographer}">`;
        // });
        // document.querySelector('.images').innerHTML = output;
    });
}
getImages(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`)