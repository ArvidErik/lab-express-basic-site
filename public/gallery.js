const imgs = [
  "https://static01.nyt.com/images/2011/10/21/arts/21JOHNNY2_SPAN/JOHNNY-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  "https://strikingfilmreviews.files.wordpress.com/2016/03/johnny-english.png",
  "https://i0.wp.com/theblurb.com.au/wp/wp-content/uploads/2018/09/Johnny-English-02.jpg?fit=1023%2C600&ssl=1",
  "https://cdn.comedy.co.uk/images/library/comedies/900x450/j/johnny_english_reborn.jpg",
  "https://i.guim.co.uk/img/media/e48012433417fb4af7e8319bc20cb07d49cb9613/8_0_1646_988/master/1646.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ee4d0411bc72122ebc982a774f58bf43",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/012e4071c06a0450531a74396629aa425b258bec8f29ce96da166a2b838ac2a0._RI_TTW_.jpg",
  "https://www.diariodesevilla.es/2018/09/20/cine/Emma-ThompsonRowan-Atkinson-Ben-Miller_1283882047_105072203_1200x675.jpg",
  "https://iadsb.tmgrup.com.tr/3a0c8b/1200/627/0/44/1000/566?u=https://idsb.tmgrup.com.tr/2019/03/08/1552071091431.jpg",
];

const cont = document.querySelector("#gallery-container");
imgs.forEach((img) => {
  const newImgEl = document.createElement("img");
  newImgEl.setAttribute("src", img);
  newImgEl.className = "gall-img";
  cont.appendChild(newImgEl);
});
