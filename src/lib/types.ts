export type States = 'none' | 'active' | 'learning' | 'paused';
export type Skill = {
    name: string;
    state: States;
    percentage: number;
}