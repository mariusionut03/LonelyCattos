const guideList = document.querySelector('.guides');

// setup project list
const setupGuides = (data) => {
    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        let linksHtml;
        if(guide.githublink && guide.weblink)
        {
            linksHtml = `<a target="_blank" href="${guide.githublink}">GitHub</a> &ensp; <a target="_blank" href="${guide.weblink}">WebLink</a>`;
        }
        else if(guide.githublink)
        {
            linksHtml = `<a target="_blank" href="${guide.githublink}">GitHub</a>`;
        }
        else if(guide.weblink)
        {
            linksHtml = `<a target="_blank" href="${guide.weblink}">WebLink</a>`;
        }
        else
        {
            linksHtml = ``;
        }
        const li = `
            <li>
                <div class="collapsible-header lighten-4">${guide.title}</div>
                <div class="collapsible-body">${guide.content}<br>
                    ${linksHtml}
                </div>
            </li>
        `;
        html += li;
    });

    guideList.innerHTML = html;
}