class ProjectState {
  private listeners: any[] = [];
  private projects: any[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  addListeners(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = {
      id: Math.random.toString(),
      title,
      description,
      people: numOfPeople,
    };

    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // pass a new reference to prevent unwanted side effects
    }
  }
}

export const projectState = ProjectState.getInstance();
