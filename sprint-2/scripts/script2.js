let comments = [
  {
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show',
    timestamp: '12/01/1929'
  },
  {
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show',
    timestamp: '12/01/1201'
  },
  {
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show',
    timestamp: '12/09/1201'
  },
];

function addComment(comment, timestamp){

  return (`
  <li class="join-conv__comment-list-item">
  <div class="join-conv__comment-img">
    <img src="" alt="">
  </div>
  <div class="join-conv__comment-name-text">
    <div class="join-conv__comment-name-date">
      <h4 class="join-conv__comment-name">${comment.name}</h4>
      <h4 class="join-conv__comment-date">${timestamp}</h4>
    </div>
    <p class="join-conv__comment-text">${comment.comment}</p>
  </div>
  `)
}

function printDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth()+1;
  const year = currentDate.getFullYear();

  //let date = document.querySelector('.join-conv__comment-date');
  return `${day}/${month}/${year}`;
};

function displayComments() {

  document.querySelector(".join-conv__comment-list").innerHTML = "";
  comments.forEach((comment) =>{
    let comment1 = document.createElement('li');
    comment1.innerHTML = addComment(comment, comment.timestamp || printDate())
    document.querySelector(".join-conv__comment-list").prepend(comment1);
  });

  // printDate();
};

displayComments();

let commentForm = document.querySelector('.join-conv__comments');
commentForm.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  let commentorName = document.querySelector(".join-conv__input1").value;
  let commentorComment = document.querySelector(".join-conv__input2").value;

  if (commentorName !== '' && commentorComment !== '')
  {
  comments.push({
    name: commentorName,
    comment: commentorComment
  });
}

  document.querySelector(".join-conv__input1").value = "";

  document.querySelector(".join-conv__input2").value = "";

  displayComments();

}






