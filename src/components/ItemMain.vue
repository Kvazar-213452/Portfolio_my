<template>
    <div class="item">
      <div class="details">
        <h3><slot name="heading"></slot></h3>
        <p class="text"><slot></slot></p>
      </div>
    </div>
</template>

<style scoped>
.item {
    margin-top: 2rem;
    display: flex;
    position: relative;
}

.text {
    color: #ffffffe0;
    font-size: 1rem;
}

.details {
    flex: 1;
    margin-left: 1rem;
}

h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
}

@media (min-width: 1024px) {
    .item {
        margin-top: 0;
        padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
        left: -250px;
        width: 540px;
    }
}
</style>
