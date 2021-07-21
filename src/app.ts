//autobind
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjdescriptor: PropertyDescriptor = {
        configurable: true,
        get(): any {
            return originalMethod.bind(this)
        }
    }
    return adjdescriptor
}

// project input class
class ProjectInput {
    templateElement: HTMLTemplateElement // accessible after enabling dom under lib in tsconfig
    hostElement: HTMLDivElement
    element: HTMLFormElement
    titleInputElement: HTMLInputElement
    descriptionInputElement: HTMLInputElement
    peopleInputElement: HTMLInputElement

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importNode = document.importNode(this.templateElement.content, true)
        this.element = importNode.firstElementChild as HTMLFormElement
        this.element.id = 'user-input'

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

        this.configure()
        this.attach()
    }

    @autobind()
    private submitHandler (event: Event) {
        event.preventDefault()
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const appInput = new ProjectInput()