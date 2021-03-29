import Apple from '../apple.jpeg';
export default function addImage() {
    const img = document.createElement('img');
    img.widht=300;
    img.alt="An apple"
    img.src= Apple;
    document.querySelector('body').appendChild(img);
}