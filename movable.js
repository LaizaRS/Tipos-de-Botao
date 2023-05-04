const draggables = document.querySelectorAll('.movableButton');

let activeDraggable = null;
let initialX;
let initialY;
let currentX;
let currentY;
let xOffset = 0;
let yOffset = 0;

draggables.forEach(draggable => {
  draggable.addEventListener('mousedown', dragStart);
  draggable.addEventListener('mouseup', dragEnd);
  draggable.addEventListener('mousemove', drag);
});

function dragStart(event) {
  activeDraggable = this;
  initialX = event.clientX - xOffset;
  initialY = event.clientY - yOffset;
}

function dragEnd(event) {
  activeDraggable = null;
}

function drag(event) {
  if (activeDraggable === null) {
    return;
  }

  event.preventDefault();

  currentX = event.clientX - initialX;
  currentY = event.clientY - initialY;

  xOffset = currentX;
  yOffset = currentY;

  activeDraggable.style.transform = `translate(${currentX}px, ${currentY}px)`;

  const draggablesArr = Array.from(draggables);
  const activeDraggableIndex = draggablesArr.indexOf(activeDraggable);

  draggablesArr.forEach(draggable => {
    if (draggable === activeDraggable) {
      return;
    }

    const draggableRect = draggable.getBoundingClientRect();
    const activeDraggableRect = activeDraggable.getBoundingClientRect();

    if (activeDraggableRect.x < draggableRect.x + draggableRect.width && 
        activeDraggableRect.x + activeDraggableRect.width > draggableRect.x && 
        activeDraggableRect.y < draggableRect.y + draggableRect.height && 
        activeDraggableRect.y + activeDraggableRect.height > draggableRect.y) {
      const direction = activeDraggableIndex > draggablesArr.indexOf(draggable) ? 1 : -1;
      draggablesArr.splice(activeDraggableIndex, 1);
      draggablesArr.splice(draggablesArr.indexOf(draggable) + direction, 0, activeDraggable);
      draggablesArr.forEach((draggable, index) => {
        draggable.style.order = index + 1;
      });
    }
  });
}