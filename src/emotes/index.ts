interface IEmotes {
    [key: string]: {
        default: string
    }
}

const emotes = import.meta.globEager("/src/assets/*.png") as IEmotes
export const emotesMap = new Map<string, string>()

for (const emote of Object.values(emotes)) {
    const emojiURL = emote.default

    const splittedURL = emote.default.split(".")
    splittedURL.pop()
    const emojiName = splittedURL.join("").split("/").pop()

    if (emojiName) {
        emotesMap.set(emojiName, emojiURL)
    }
}