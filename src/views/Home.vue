<template>
  <div id="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>Styled Components no Vue.js</h1>
    <div>
      <CButton>Clique Aqui</CButton>
      <CButtonProps primary>Clique Aqui</CButtonProps>
      <CButtonPropsCond>Clique Aqui Condicional</CButtonPropsCond>
    </div>
  </div>
</template>

<script>
import CButton from "@/components/Button";
import CButtonProps from "@/components/ButtonProps";
import CButtonPropsCond from "@/components/ButtonPropsCond";
export default {
  name: "home",
  components: {
    CButton,
    CButtonProps,
    CButtonPropsCond
  }
};
</script>

<style>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>