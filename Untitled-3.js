document.getElementById("imageUploader").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.classList.add("draggable");
        img.style.width = "150px";
        img.style.top = "0";
        img.style.left = "0";
        document.getElementById("content").appendChild(img);
        makeDraggable(img);
    }
});

document.getElementById("addTextButton").addEventListener("click", function() {
    const text = prompt("Gib den Text ein:");
    if (text) {
        const p = document.createElement("p");
        p.textContent = text;
        p.classList.add("draggable");
        p.style.top = "0";
        p.style.left = "0";
        document.getElementById("content").appendChild(p);
        makeDraggable(p);
    }
});

document.getElementById("datePicker").addEventListener("change", function(event) {
    const date = event.target.value;
    const p = document.createElement("p");
    p.textContent = "Datum: " + date;
    p.classList.add("draggable");
    p.style.top = "0";
    p.style.left = "0";
    document.getElementById("content").appendChild(p);
    makeDraggable(p);
});

function makeDraggable(element) {
    let isMouseDown = false;

    element.addEventListener("mousedown", function(e) {
        isMouseDown = true;
        const offsetX = e.offsetX;
        const offsetY = e.offsetY;

        function onMouseMove(e) {
            if (isMouseDown) {
                element.style.left = e.pageX - offsetX + "px";
                element.style.top = e.pageY - offsetY + "px";
            }
        }

        document.addEventListener("mousemove", onMouseMove);

        element.addEventListener("mouseup", function() {
            isMouseDown = false;
            document.removeEventListener("mousemove", onMouseMove);
        });
    });
}
