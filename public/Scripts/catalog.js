const guideList = document.querySelector('.guides');

// setup project list
const setupGuides = (data) => {
    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li>
                <div class="collapsible-header lighten-4">${guide.Title}</div>
                <div class="collapsible-body">${guide.Content}</div>
            </li>
        `;
        html += li;
    });

    guideList.innerHTML = html;
}