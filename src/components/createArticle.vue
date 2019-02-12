<template>
  <div class="newArticle-wrapper">
    <form action="" method="POST" class="article-form">
      <label for="title">
        <input type="text" placeholder="Article Title" name="title" id="title" />
      </label>
      <label for="body">
        <input type="text" placeholder="What's this article about?" name="body" id="body" />
      </label>
      <label for="description">
        <textarea name="description" id="description" placeholder="Write your article"></textarea>
      </label>
      <label for="tags">
        <input type="text" name="tags" id="tags" placeholder="Enter tags" />
      </label>
      <div class="pubArticle">
        <input type="submit" value="Publish Article" id="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "createArticle"
}
</script>

<style scoped>
  .newArticle-wrapper {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
  }
  .article-form {
    width: 100%;
  }
  input#title, input#body, input#tags, textarea#description {
    margin: 10px 0;
    width: 100%;
    height: 40px;
    outline: none;
    font-size: 16px;
    border: 1px solid #b9b6b7;
    border-radius: 5px;
    padding: 5px;
    color: #55595c;
  }

  input#title:focus, input#body:focus, input#tags:focus, textarea#description:focus {
    border-color: #66afe9;
  }
  textarea#description {
    height: 100px;
    padding: 10px 5px;
  }
  .pubArticle {
    float: right;
    padding: 10px 0;
  }
  .pubArticle input#submit {
     background: #42b983;
    border: none;
    height: 45px;
    width: 150px;
    border-radius: 2px;
    color: aliceblue;
    font-size: 16px;
    cursor: pointer;
  }
  .pubArticle input#submit:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
