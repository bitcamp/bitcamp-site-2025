<template>
    <div class="Rtable-cell Rtable-category-cell" :class="'Rtable-misc-category-cell-' + type">
        <a class="tooltips direction" :title="perk" :description="description">
            <img src="../assets/img/icons/question-mark-black.svg" alt="Question Mark" />
        </a>
        <span v-if="bolded" style="color:var(--color-dark-text)"><b>{{ perk }}</b></span>
        <span v-else style="color: var(--color-dark-text);">{{ perk }}</span>
    </div>

    <div class="Rtable-cell Rtable-cell-misc" :class="'Rtable-misc-cell-' + type"
        style="color: var(--color-dark-text);">
        {{ price }}
    </div>
    <div class="Rtable-cell Rtable-cell-blank"></div>
    <div class="Rtable-cell Rtable-cell-blank"></div>
    <div class="Rtable-cell Rtable-cell-blank"></div>
    <div class="Rtable-cell Rtable-cell-blank"></div>
    <div class="Rtable-cell Rtable-cell-blank"></div>
</template>

<script>
export default {
    name: 'ProspectusFooter',
    props: {
        perk: {
            type: String,
            required: true,
        },
        bolded: {
            type: Boolean,
            required: true
        },
        price: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.boldClass {
    font-weight: bold;
}
</style>