


const commentForm = document.querySelector('.join-conv__comments');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const commentName = event.target.name.value;
  const commentComment = event.target.comment.value;

  document.querySelector(".join-conv__input1").value = "";
  document.querySelector(".join-conv__input2").value = "";
  
  if (commentName === '' || commentComment === '') {
    return;
  }

  postComment(commentName, commentComment);

});

const apiURL = `https://project-1-api.herokuapp.com/`;
const apiKey = `?api_key=<91802317-77c5-4235-82ec-eb3f41f37238>`;
const commentsApi = `comments`;

getComments = () => {

  axios.get(apiURL + commentsApi + apiKey)
  .then(response => {
    console.log(response.data);
    let responseReverse = response.data.reverse(); 
    responseReverse.forEach(item => {
      let date = moment(item.timestamp).fromNow();
      makeCommentNode(item.name, item.comment, date);
    }) 
  })
  .catch(error => {
    console.log(error);
  })
}

postComment = (commentName, commentComment) => {

  axios.post(apiURL + commentsApi + apiKey, {
    name: commentName,
    comment: commentComment
  })
  .then(function () {
    clearsComments();
    getComments();
  })
  .catch(function (error) {
    console.log(error);
  });
}

function clearsComments() {
  let element = document.querySelector('.join-conv__comment-list');
  while (element.firstChild) {
  element.removeChild(element.firstChild);
  }
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

  let list = document.querySelector('.join-conv__comment-list');

  let listItem = document.createElement('li');
  listItem.setAttribute('class', 'join-conv__comment-list-item');

  let imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'join-conv__comment-img');

  let img = document.createElement('img');
  img.setAttribute('class', '.join-conv__img');

  imgDiv.appendChild(img);

  listItem.appendChild(imgDiv);
  listItem.appendChild(nameAndComment);

  list.appendChild(listItem);

}

getComments();







