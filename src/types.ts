export type TRep = {
    id?: number;
    name?: string;
    description?: string;
    forks?: number;
    watchers?: number;
    language?: string;
    homepage?: string;
    topics?: string[];
};
// https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&order=desc
