<template>
  <div class="container contato">
    <div class="row">
      <div class="col-12">
        <a
          href="#"
          target="_blank"
          class="link"
          data-toggle="tooltip"
          data-placement="top"
          title="Currículo.pdf"
        >
          <svg class="icon">
            <use
              xlink:href="@/assets/pedrogelli-portifolio-sprite.svg#file-pdf-regular"
            ></use>
          </svg>
        </a>
        <a
          href="mailto:pedrogelli@gmail.com"
          target="_blank"
          class="link"
          data-toggle="tooltip"
          data-placement="top"
          title="pedrogelli@gmail.com"
        >
          <svg class="icon">
            <use
              xlink:href="@/assets/pedrogelli-portifolio-sprite.svg#email"
            ></use>
          </svg>
        </a>
        <a
          href="tel:+5521969400215"
          target="_blank"
          class="link"
          data-toggle="tooltip"
          data-placement="top"
          title="+55 21 96940-0215"
        >
          <svg class="icon">
            <use
              xlink:href="@/assets/pedrogelli-portifolio-sprite.svg#phone"
            ></use>
          </svg>
        </a>
        <a href="mailto:pedrogelli@gmail.com" class="email-text"
          >pedrogelli@gmail.com</a
        >
        <p>Rio de Janeiro, RJ - Brasil</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
