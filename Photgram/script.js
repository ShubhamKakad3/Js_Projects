// script.js

const postsData = [
  { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
  { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
  { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
  { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];

const likedPosts = new Set();

function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  postsData.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('h3');
    authorElement.textContent = post.author;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = 'Post Image';

    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
    likeButton.addEventListener('click', () => {
      if (!likedPosts.has(post.id)) {
        likePost(post);
        likedPosts.add(post.id);
        likeButton.disabled = true; // Disable the button after clicking
      }
    });

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button');
    commentButton.addEventListener('click', () => {
      addComment(post, commentInput.value);
      commentInput.value = '';
    });

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');

    post.comments.forEach(comment => {
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });

    postElement.appendChild(authorElement);
    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postFooter.addEventListener('click', () => {
      if (commentsContainer.style.display === 'none') {
        commentsContainer.style.display = 'block';
      } else {
        commentsContainer.style.display = 'none';
      }
    });

    postsContainer.appendChild(postElement);
  });
}

// Function to handle post liking
function likePost(post) {
  post.likes++;
  renderPosts();
  const button = document.querySelector('.like-button');
  button.style.backgroundColor = 'red';
}

// Function to handle adding a comment
function addComment(post, comment) {
  post.comments.push(comment);
  renderPosts();
}

renderPosts();
