export abstract class BaseClass<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement // accessible after enabling dom under lib in tsconfig
  hostElement: T
  element: U

  protected constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement
    this.hostElement = document.getElementById(hostElementId)! as T

    const importNode = document.importNode(this.templateElement.content, true)
    this.element = importNode.firstElementChild as U
    if (newElementId) {
      this.element.id = newElementId
    }

    this.attach(insertAtStart)
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    )
  }

  abstract configure(): void

  abstract renderContent(): void
}
