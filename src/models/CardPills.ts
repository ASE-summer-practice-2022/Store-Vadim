export default interface CardPills {
    id: number;
    name: string
    substanceId: number;
    substance: {
        id: number;
        name: string;
        code: string
    }
}