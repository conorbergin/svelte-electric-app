
export function generateRandomValue(): number {
    return Math.floor(Math.random() * 100)
}

const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

export function generateRandomName(): string {
    const firstNames: string[] = [
        "Alice", "Bob", "Charlie", "David",
        "Emma", "Frank", "Grace", "Henry",
        "Ivy", "Jack", "Katherine", "Lysander",
        "Mortimer", "Nicholas","Olivia","Pascal",
        "Quentin","Rodger","Samantha","Terrence",
        "Ulysses","Vernon","Walter",
        "Xavier","Yvette","Zachary"
    ];

    const secondNames: string[] = [
        "Adams", "Brown", "Clark", "Davis",
        "Evans", "Fisher", "Gibson", "Hill",
        "Irwin", "Johnson", "Kennedy","Lawson",
        "Mitchell", "Nelson", "O'Driscoll","Parker",
        "Quinn","Reynolds", "Sullivan", "Thompson",
        "Underwood", "Vaughn","Wallace",
        "Xander","Yates","Zimmerman"
    ];

    return `${randomItem(firstNames)} ${randomItem(secondNames)}`;
}

export function generateRandomGroup(): string {
    const adj = [
        'Chivalrous', 'Grand', 'Illustrious',
        'Genteel', 'Exalted', 'Ladies', 'Gentlemans'
    ]

    const activity = [
        'Knitting', 'Lawn-Tennis', 'Croquet', 'Opera', 'Hunting',
        'Fishing', 'Flower Arranging', 'Exercise', 'Etiquette'
    ]

    const groups = [
        'Society', 'Guild', 'Alliance', 'Consortium',
        'League', 'Assembly'
    ]

    return `The ${randomItem(adj)} ${randomItem(activity)} ${randomItem(groups)}`
}