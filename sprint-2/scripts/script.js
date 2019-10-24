

let comments = [
  {
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show',
    timestamp: '23/02/1931'
  },
  {
    name: 'Chad Montgomery',
    comment: 'They were pretty alright...ya know?',
    timestamp: '4/11/1963'
  },
  {
    name: 'Dorthy Everett',
    comment: 'Complete and utter garbage, and boy do I love me some hot garbage',
    timestamp: '12/09/1979'
  },
];

function printDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
};




const commentForm = document.querySelector('.join-conv__comments');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentorName = event.target.name;
  const commentorComment = event.target.comment;

  const commentName = commentorName.value;
  const commentComment = commentorComment.value;

  document.querySelector(".join-conv__input1").value = "";
  document.querySelector(".join-conv__input2").value = "";
  
  if (commentName === '' || commentComment === '') {
    return;
  }

  postComment(commentName, commentComment);
  // clearsComments();
  // displayComment();


});

function postComment(name, comment) {
  comments.push({
    name: name,
    comment: comment,
    timestamp: printDate()
  });
}

function clearsComments() {
  const list = document.querySelector('.join-conv__comment-list');
  list.removeChild();
}

function makeCommentNode(name, comment, timestamp) {
  let nameAndComment = document.createElement('div');
  nameAndComment.setAttribute('class', 'join-conv__comment-name-text');

  let nameAndDate = document.createElement('div');
  nameAndDate.setAttribute('class', 'join-conv__comment-name-date');

  let comName = document.createElement('h4');
  comName.setAttribute('class', 'join-conv__comment-name');
  comName.textContent = name;

  let comDate = document.createElement('h4');
  comDate.setAttribute('class', 'join-conv__comment-date');
  comDate.textContent = timestamp

  let comComment = document.createElement('p');
  comComment.setAttribute('class', 'join-conv__comment-text');
  comComment.textContent = comment;

  nameAndComment.appendChild(nameAndDate);
  nameAndComment.appendChild(comComment);

  nameAndDate.appendChild(comName);
  nameAndDate.appendChild(comDate);

  return nameAndComment;
}

function makeListItemNode() {
  const list = document.querySelector('.join-conv__comment-list');

  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'join-conv__comment-list-item');

  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'join-conv__comment-img');

  const img = document.createElement('img');
  img.setAttribute('class', '.join-conv__img');

  imgDiv.appendChild(makeCommentNode());

  return list;
}

console.log(makeListItemNode());

function displayComment(comments) {
  for (let i = 0; i < comments.length; i++) {
    
  }
}




