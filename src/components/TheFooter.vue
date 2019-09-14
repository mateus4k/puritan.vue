<template>
  <footer>
    <p>
      Desenvolvido por
      <a href="https://mateus4k.github.io/" target="_blank">Mateus4k</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style>
footer {
  background: #473532;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 0.9rem;
}
footer a {
  color: white;
}
footer a:hover {
  transition: 0.3s;
  color: #e4bc7f;
}
</style>