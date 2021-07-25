import { projectState } from "./projectState";

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: any[] | undefined;

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListeners((projects: any[]) => {
      this.assignedProjects = projects;
      this.renderProjects()
    });

    this.attach();
    this.renderContent();
  }

  private renderContent() {
    this.element.querySelector("ul")!.id = `${this.type}-projects-list`;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

export default ProjectList;
