export interface orderItem {
    name: string,
    cost: number
}
export interface meal {
    base: orderItem | null,
    protein: orderItem,
    bean: orderItem,
    rice: orderItem,
    salsa: orderItem | null,
    toppings: orderItem | null,
    extras: orderItem | null, 
}

export interface TeamMember {
    id: string,
    name: string,
    meal: meal
}