class ProjectState {
  private projects: any[] = [];
  private static instance: ProjectState;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = {
      id: Math.random.toString(),
      title,
      description,
      people: numOfPeople,
    };
    this.projects.push(newProject);
  }
}

export const projectState = ProjectState.getInstance();
