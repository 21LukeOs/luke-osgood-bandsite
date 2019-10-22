

let comments = [
  {
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show'
  }
];

let commentForm = document.querySelector('.join-conv__comments');

function submit(e) {
  e.preventDefault();
  let commentorName = document.querySelector(".join-conv__input1").value;
  let commentorComment = document.querySelector(".join-conv__input2").value;

  comments.push({
    name: commentorName,
    comment: commentorComment
  });

  document.querySelector(".join-conv__input1").value = "";

  document.querySelector(".join-conv__input2").value = "";

  let newComment = {
    name: commentorName,
    comment: commentorComment
  }
  displayComments(newComment);
}

console.log(comments);

commentForm.addEventListener('submit', submit);

function displayComments(comment) {

  
  document.querySelector(".join-conv__comment-list").innerHTML = "";
  comments.forEach((comment) =>{
    let comment1 = document.createElement('li');
    comment1.innerHTML = `
    <li class="join-conv__comment-list-item">
    <div class="join-conv__comment-img">
      <img src="" alt="">
    </div>
    <div class="join-conv__comment-name-text">
      <div class="join-conv__comment-name-date">
        <h4 class="join-conv__comment-name">${comment.name}</h4>
        <h4 class="join-conv__comment-date">12/18/2018</h4>
      </div>
      <p class="join-conv__comment-text">${comment.comment}</p>
    </div>
    `
    document.querySelector(".join-conv__comment-list").appendChild(comment1);
  });
};