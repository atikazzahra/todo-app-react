export interface TodoSummaryCount {
  ALL: number;
  COMPLETED: number;
  TODO: number;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
