// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'SJULY 20, 2019';
    headerDiv.appendChild(dateSpan);

    const headerH1 = document.createElemnt('h1');
    headerH1.textContent = 'Lambda Times';
    headerDiv.appendChild(headerH1);

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98*';
    headerDiv.appendChild(tempSpan);
}
