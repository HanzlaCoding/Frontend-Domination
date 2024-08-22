var input = document.querySelector('input');

const data = [{
    name: "John Doe",
    imageSrc: "https://randomuser.me/api/portraits/men/1.jpg"
},
{
    name: "Jane Smith",
    imageSrc: "https://randomuser.me/api/portraits/women/2.jpg"
},
{
    name: "Michael Johnson",
    imageSrc: "https://randomuser.me/api/portraits/men/3.jpg"
},
{
    name: "Emily Brown",
    imageSrc: "https://randomuser.me/api/portraits/women/4.jpg"
},
{
    name: "David Wilson",
    imageSrc: "https://randomuser.me/api/portraits/men/5.jpg"
},
{
    name: "Olivia Taylor",
    imageSrc: "https://randomuser.me/api/portraits/women/6.jpg"
},
{
    name: "William Anderson",
    imageSrc: "https://randomuser.me/api/portraits/men/7.jpg"
},
{
    name: "Sophia Martinez",
    imageSrc: "https://randomuser.me/api/portraits/women/8.jpg"
},
{
    name: "Benjamin Thomas",
    imageSrc: "https://randomuser.me/api/portraits/men/9.jpg"
},
{
    name: "Ava Miller",
    imageSrc: "https://randomuser.me/api/portraits/women/10.jpg"
}
];


var pers = "";
data.forEach((elem) => {
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.imageSrc}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
});

document.querySelector('#people').innerHTML = pers;


input.addEventListener('input', () => {
    var matching = data.filter((e) => {
        return e.name.startsWith(input.value);
    });

    var neusers = "";
    matching.forEach((elem) => {
        neusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.imageSrc}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`
    });

    document.querySelector('#people').innerHTML = neusers;
})