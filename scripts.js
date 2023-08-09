window.addEventListener("load", function() {
  const button = document.getElementById('story');
  button.addEventListener("click", showStory);
});


function showStory() {
  console.log("It's working!");
}