import tutorials from "$lib/tutorials.json"

export type Tutorial = typeof tutorials[0];

export function load({params}: {params: {tutorial: string}}) {
    return tutorials.find((tute) => tute.topic === params.tutorial.split("?")[0])
}