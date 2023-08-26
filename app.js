const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },

];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const populateTable = (data, tableBody) => {
    data.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = index + 1; // Order number
        row.insertCell().textContent = item.name;
        row.insertCell().textContent = item.year;
    });
};

   const populateTableComment = (data, tableBody) => {
    data.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = index + 1; // Order number
        row.insertCell().textContent = item.id;
        row.insertCell().textContent = item.text;
    });
};

const peopleTableBody = document.getElementById('peopleTableBody');
populateTable(people, peopleTableBody);

const commentsTableBody = document.getElementById('commentsTableBody');
populateTableComment(comments, commentsTableBody);




const currentYear = new Date().getFullYear();

const isAtLeastNineteen = people.some(person => currentYear - person.year >= 19);
const areAllNineteenOrOlder = people.every(person => currentYear - person.year >= 19);
const commentToFind = comments.find(comment => comment.id === 823423);
const commentIndexToDelete = comments.findIndex(comment => comment.id === 823423);

const isAtLeastNineteenResult = document.getElementById('isAtLeastNineteenResult');
const areAllNineteenOrOlderResult = document.getElementById('areAllNineteenOrOlderResult');
const commentToFindResult = document.getElementById('commentToFindResult');
const commentIndexToDeleteResult = document.getElementById('commentIndexToDeleteResult');

isAtLeastNineteenResult.textContent = 'At least one person is 19 or older: ' + isAtLeastNineteen;
areAllNineteenOrOlderResult.textContent = 'Everyone is 19 or older: ' + areAllNineteenOrOlder;
commentToFindResult.textContent = 'Comment with ID 823423: ' + JSON.stringify(commentToFind);
commentIndexToDeleteResult.textContent = 'Comment Index to Delete Result Index : ' + commentIndexToDelete;
