function set_time(e) {
    document.querySelector('video').currentTime += e.target.value * 60
    e.target.value = 0
}

const input_elem = document.createElement("input");

input_elem.id = "perrito";
input_elem.type = "range";
input_elem.value = "0";
input_elem.min = "-5";
input_elem.max = "5";

input_elem.style.zIndex = "9999";
input_elem.style.position = "fixed";

input_elem.addEventListener("change", set_time);

document.body.appendChild(input_elem);
