function createCheckbox(id) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    document.body.appendChild(checkbox);
}

function createPage(data) {
    const { id, title, pageNumber, imagePath, hasImage = true, text, checkboxId } = data;

    const page = document.createElement('div');
    page.classList.add('page');
    page.id = id;

    const frontPage = document.createElement('div');
    frontPage.classList.add('front-page');
    frontPage.innerHTML = `
        <div class="title-div">
            <h2 class="title">${title}</h2>
        </div>
        <div class="text-div">
            <p class="text">${text}</p>
        </div>
    `;

    // Check if it's not the last page before adding the next label
    if (pageNumber < pagesData.length) {
        frontPage.innerHTML += `<label class="next" for="${checkboxId}"><i class="fas fa-chevron-right"></i></label>`;
    }

    const backPage = document.createElement('div');
    backPage.classList.add('back-page');

    if (hasImage) {
        backPage.innerHTML = `<img src="${imagePath}">`;
    }

    const prevLabel = document.createElement('label');
    prevLabel.classList.add('prev');
    prevLabel.htmlFor = checkboxId;
    prevLabel.innerHTML = '<i class="fas fa-chevron-left"></i>';

    backPage.appendChild(prevLabel);
    page.appendChild(frontPage);
    page.appendChild(backPage);

    return page;
}

function createStyles() {
    const styles = document.createElement('style');
    let stylesContent = '';

    // Z-index for pages
    for (let i = 1; i <= pagesData.length; i++) {
        stylesContent += `#page${i} { z-index: ${pagesData.length - i}; }\n`;
    }

    // Checkbox styles
    for (let i = 1; i <= pagesData.length - 1; i++) {
        stylesContent += `#checkbox-page${i}:checked ~ .book #page${i} { transform: rotateY(-180deg); z-index: ${i + 1}; }\n`;
    }

    styles.textContent = stylesContent;
    document.head.appendChild(styles);
}

function insertPages(pages) {
    const book = document.querySelector('.book');
    const backCover = document.createElement('div');
    backCover.classList.add('back-cover');

    pages.forEach(page => {
        const insertedPage = createPage(page);
        book.appendChild(insertedPage);
    });

    book.appendChild(backCover);
}
