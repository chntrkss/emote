<script setup lang="ts">
    import type { MessageToken } from "dolma"
    import { emotesMap } from "../emotes"

    interface IEncodedData {
        encodedData: MessageToken[]
    }

    defineProps<IEncodedData>()
</script>

<template>
    <template v-for="token in encodedData">
        <template v-if="token.t === 'text'">
            {{ token.v }}
        </template>
        <template v-else-if="token.t === 'mention'">
            <strong>{{ token.v }}</strong>
        </template>
        <template v-else-if="token.t === 'block'">
            <em>{{ token.v }}</em>
        </template>
        <template v-else-if="token.t === 'link'">
            <a :href="token.v">{{ token.v }}</a>
        </template>
        <template v-else-if="token.t === 'emote'">
            <template v-if="emotesMap.get(token.v)">
                <img :src="emotesMap.get(token.v)" :alt="token.v" />
            </template>
        </template>
        <span>&nbsp;</span>
    </template>
</template>
