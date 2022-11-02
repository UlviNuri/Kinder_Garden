var GardenData =[
    {
        id:1,
        name:"Bagca",
        maps:"Binəqədi rayonu",
        img:"http://127.0.0.1:5502/asset/images/Rectangle%2016%20(3).png",

    },
    {
        id:2,
        name:"Bagca",
        maps:"Nərimanov rayonu",
        img:"Rectangle 264 (1).png",

    },
    {
        id:3,
        name:"Bagca",
        maps:"Nəsimi rayonu",
        img:"http://127.0.0.1:5502/asset/images/Rectangle%2016%20(8).png",

    },
    {
        id:4,
        name:"Bagca",
        maps:"Suraxanı rayonu",
        img:"http://127.0.0.1:5502/asset/images/Rectangle%2016%20(8).png",

    },
    {
        id:5,
        name:"Bagca",
        maps:"Suraxanı rayonu",
        img:"http://127.0.0.1:5502/asset/images/Rectangle%2016%20(8).png",

    },
    {
        id:6,
        name:"Bagca",
        maps:"Yasamal  rayonu",
        img:"http://127.0.0.1:5502/asset/images/Rectangle%2016%20(8).png",

    },
    {
        id:7,
        name:"Bagca",
        maps:"Pirallahı  rayonu",
        img:"http://127.0.0.1:5502/asset/images/Rectangle%2016%20(8).png",

    },
    {
        id:8,
        name:"Bagca",
        maps:"Xətai   rayonu",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Ffootball-stock-231001-ruud-van-nistelrooy-manchester-united-mandatory-crediaction-imgaes-tony-obrien-image403718831.html&psig=AOvVaw1MyfeqrrGNI9ZuBqPQtFG-&ust=1667476968999000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJC73PG5j_sCFQAAAAAdAAAAABAE",

    },
]

GardenData.forEach( (data) => {
    if (data != null) {
      let output_data = "";
      output_data += `
    <div class="garden_data">
    <div class="garden_image">
      <img src=${GardenData.img} alt=${GardenData.name} />
    </div>
    <div class="garden_items">
      <h4>${GardenData.name}</h4>
      <p>${GardenData.maps}</p>
    </div>
    </div>
    `;
      let element = document.querySelector(".garden_item");
      let new_element = document.createElement("div");
      new_element.classList.add("col-lg-4");
      new_element.innerHTML = output_data;
      element.appendChild(new_element);
    }
  });
  