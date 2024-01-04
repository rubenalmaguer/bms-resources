const WANTED_EMAILS = require('./wanted-emails.js')['Video_Freelancers_v.2.0'].Translators;

const resources = require('./resources_240104.js');

let ids = [];

for (let email of WANTED_EMAILS) {
    if (email === '') {
        ids.push('N/A');
        continue
    }

    const matchingResource = resources.find(r => r.email.trim().toUpperCase() === email.trim().toUpperCase());
    const id = matchingResource?.resource_id ?? 'N/A';
    ids.push(id);
}

let idsAsColumn = ids.reduce((acc, cur) => `${acc}\n${cur}`, '');

console.log(idsAsColumn);