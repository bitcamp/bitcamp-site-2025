<template>
    <div class="Rtable-cell Rtable-category-cell Rtable-category-cell-bottom">
        <a class="tooltips direction" :title="categoryName" :description="description">
            <img src="../assets/img/icons/question-mark-black.svg" alt="Question Mark" />
        </a>
        <span style="color: var(--color-dark-text);">{{ categoryName }}</span>
    </div>

    <div v-for="(arg, index) in   args  " :key="index" class="Rtable-cell" :class="'Rtable-cell-' + tierNames[index]">
        <p v-if="arg === 'check-b'">
            <img src="../assets/img/icons/check-black.svg" alt="Checkmark" />
        </p>
        <p v-else-if="arg === 'check-w'">
            <img src="../assets/img/icons/check-white.svg" alt="Checkmark" />
        </p>
        <p v-else>
            <!-- Only for Custom Sponsor Marketing Video -->
            <span v-if="typeof arg === 'string' && arg.includes('check')">
                {{ arg.split('check')[0] }}
                <br>
                <span style="display: flex; justify-content: center;"
                    v-if="typeof arg === 'string' && arg.includes('check-b')">
                    (&nbsp;<img style="width: 1.75rem;" src="../assets/img/icons/check-black.svg"
                        alt="Checkmark" />&nbsp;)
                </span>
                <span style="display: flex; justify-content: center;"
                    v-if="typeof arg === 'string' && arg.includes('check-w')">
                    (&nbsp;<img style="width: 1.75rem;" src="../assets/img/icons/check-white.svg"
                        alt="Checkmark" />&nbsp;)
                </span>
            </span>
            <span v-else-if="typeof arg === 'string' && arg.includes('$')">
                {{ arg.split(' ')[0] }} {{ arg.split(' ')[1] }}
                <br>
                {{ arg.split(' ')[2] }}
            </span>
            <span v-else>
                {{ arg }}
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ProspectusBottomRow',
    props: {
        args: {
            type: Array,
            required: true,
        },
        tierNames: {
            type: Array,
            required: true,
        },
        categoryName: {
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
.Rtable-cell {}
</style>