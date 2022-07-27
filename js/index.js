// Initiate a canvas
const canvas = new fabric.Canvas("canvas");

/* //Add Object
const circle = new fabric.Circle({
  radius: 40,
  fill: "#ff0000",
  top: 110,
  left: 110,
});

// Adding object to the canvas
canvas.add(circle); */


//Add Image
document.getElementById("uploader").onchange = function (e) {
  const reader = new FileReader();
  reader.onload = function (e) {
    let image = new Image();
    image.src = e.target.result;
    image.onload = function () {
      let img = new fabric.Image(image);
      img.set({
        left: 100,
        top: 60,
      });
      img.scaleToWidth(200);
      canvas.add(img).setActiveObject(img).renderAll();
    };
  };
  reader.readAsDataURL(e.target.files[0]);
};

//Zoom In and Out
canvas.on("mouse:wheel", function (opt) {
  let delta = opt.e.deltaY;
  let zoom = canvas.getZoom();
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.01) zoom = 0.01;
  canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
});

//Canvas Size
canvas.setWidth(500);
canvas.setHeight(350);
canvas.renderAll();