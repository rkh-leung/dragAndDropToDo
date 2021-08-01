export interface Draggable {
  dragStartHandler(event: DragEvent): void

  dragEndHandler(event: DragEvent): void
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void

  dropHandler(event: DragEvent): void

  dragLeaveHandler(event: DragEvent): void
}

export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
