<template>
    <div class="Rtable-cell Rtable-category-cell title-row" style="color: var(--color-dark-text)">
        <div class="Rtable-title-content">
            {{ categoryName }}
        </div>
    </div>
    <div class="Rtable-cell Rtable-cell-Byte title-row"></div>
    <div class="Rtable-cell Rtable-cell-Kilo title-row"></div>
    <div class="Rtable-cell Rtable-cell-Mega title-row"></div>
    <div class="Rtable-cell Rtable-cell-Giga title-row"></div>
    <div class="Rtable-cell Rtable-cell-Tera title-row"></div>
    <div class="Rtable-cell Rtable-cell-Peta title-row"></div>
</template>

<script>
export default {
    name: 'ProspectusEmptyRow',
    props: {
        categoryName: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.Rtable-title-content {
    margin-left: 1rem;
    margin-top: 0.5rem;
}
</style>