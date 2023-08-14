const images = [
    // 2018 Inauguración Expotecnia
 "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
  "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
   "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
     "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    // 2017 Exptecnia
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
   "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"

    // 2019 Inauguración expo
 "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
  "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
   "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
     "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"

    // 2021 Inauguración expo
 "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
  "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
   "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
     "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"

    // 2022 Inauguración expo
  "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
   "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
    "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
     "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
      "C:/Users/danie/OneDrive/Escritorio/Expotecnia/1.jpg"
];

const galleryDiv = document.querySelector(".gallery");

images.forEach((imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Imagen de la galería";

    link.appendChild(img);
    galleryDiv.appendChild(link);
});
