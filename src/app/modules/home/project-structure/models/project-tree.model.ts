export interface ProjectTreeNode {
    name: string;
    icon?: string;
    comment?: string;
    expandable?: boolean;
    level?: number;
    children?: ProjectTreeNode[];
}

export interface FlatProjectTreeNode {
    name: string;
    icon?: string;
    comment?: string;
    expandable: boolean;
    level: number;
}
