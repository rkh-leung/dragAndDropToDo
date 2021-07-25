class ProjectState {
    private projects: any[] = []

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = {
            id: Math.random.toString(),
            title,
            description,
            people: numOfPeople
        }
        this.projects.push(newProject)
    }
}