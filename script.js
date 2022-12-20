const testimonials = [
    {
        name: "Bill Gates",
        job: "CEO, Microsoft",
        image: "/img/bill.jpeg",
        testimonial: "William Henry Gates III (born October 28, 1955) is an American business magnate and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman.",
    },
    {
        name: "Jennifer Lopez",
        job: "Actress, Hollywood",
        image: "/img/jeni.jpeg",
        testimonial: "Jennifer Lynn Lopez is an American singer, actress and dancer. In 1991, she began appearing as a Fly Girl dancer on the sketch comedy television series In Living Color, where she remained a regular until she decided to pursue an acting career in 1993.",
    },
    {
        name: "Roman Range",
        job: "Fighter, WWE",
        image: "/img/roman.jpg",
        testimonial: `Leati Joseph "Joe" Anoa'i (born May 25, 1985) is an American professional wrestler and former football player. He is currently signed to WWE, where he performs on the SmackDown brand under the ring name Roman Reigns. He is the leader of The Bloodline.`,
    },
    {
        name: "Ratan Tata",
        job: "CEO, Tata Group",
        image: "/img/ratan.jpeg",
        testimonial: "Ratan Naval Tata is an Indian industrialist and former chairman of Tata Sons. He was also the chairman of the Tata Group from 1990 to 2012, serving also as interim chairman from October 2016 through February 2017. He continues to head its charitable trusts.",
    },
];

let i = 0;  // Current slide index 
let j = testimonials.length;  // Total slides index count

let testimonialDock = document.getElementById("testimonial-dock");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialDock.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    `;
};

window.onload = displayTestimonial;