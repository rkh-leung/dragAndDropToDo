class ProjectInput {
    templateElement: HTMLTemplateElement // accessible after enabling dom under lib in tsconfig
    hostElement: HTMLDivElement
    element: HTMLFormElement

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importNode = document.importNode(this.templateElement.content, true)
        this.element = importNode.firstElementChild as HTMLFormElement
        this.attach()
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const appInput = new ProjectInput()