const addItems = document.querySelector('.add-items');
const resetBtn = addItems.querySelector('[type="reset"]');
const checkBtns = addItems.querySelectorAll('.check-btn');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    /* Local storage */
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    const el = e.target;
    const index = el.dataset.index;
    if (!el.matches('input')) return; // skip
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function resetItems() {
    localStorage.clear();
    items.length = 0;
    itemsList.innerHTML = '';
}

function toggleCheckBoxes(e) {
    const inputs = itemsList.querySelectorAll('input');
    inputs.forEach((input, i) => {
        if (e.target.matches('.checked')) {
            input.checked = true;
            items[i].done = true;
        } else {
            input.checked = false;
            items[i].done = false;
        }

        localStorage.setItem('items', JSON.stringify(items));
    });
}


addItems.addEventListener('submit', addItem);
resetBtn.addEventListener('click', resetItems);
itemsList.addEventListener('click', toggleDone);
checkBtns.forEach(btn => btn.addEventListener('click', toggleCheckBoxes));

populateList(items, itemsList);
