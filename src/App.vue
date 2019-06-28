<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.container.header {
  margin: 60px auto;
}
.container.links {
  margin: 30px auto 60px auto;
}
h1 {
  font-size: 60px;
  font-weight: 710;
}
a {
  display: inline-block;
}
.titulo {
}
.subtitulo {
}
svg {
  width: 50px;
  height: 50px;
  color: black;
  transition: 0.2s;
}
svg:hover {
  color: #c7c7c7;
}
.tools svg {
  width: 25px;
  margin: 0 10px;
  opacity: 0.35;
}
.contato svg {
  width: 30px;
  height: 30px;
}
a.link {
  margin: 20px 20px;
}
.social {
  padding: 15px;
}
.contato p {
  margin-top: 5px;
}
.contato a.email-text {
  color: #2c3e50;
  display: block;
}
/****************************
# MEDIA QUERIES
****************************/
@media screen and (max-width: 720px) {
  svg {
    width: 30px;
    height: 30px;
  }
  .tools svg {
    width: 20px;
    margin: 5px 10px;
    opacity: 0.35;
  }
  .contato a.email-text {
    margin-top: 10px;
  }
  .titulo {
    font-size: 40px;
  }
  .subtitulo {
    font-size: 14px;
  }
  .container.header {
    margin-bottom: 30px;
  }
  a.link {
    margin: 10px 20px;
  }
  .container.links {
    margin: 30px auto 30px auto;
  }
}
</style>
