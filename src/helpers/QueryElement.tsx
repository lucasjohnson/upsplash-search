export default class QueryElement {
  public static selector = (selector: string): HTMLElement =>
    document.querySelector(selector) as HTMLElement;

  public static elementArray = (
    parent: HTMLElement,
    selector: string
  ): HTMLElement[] => {
    const nodeList = parent.querySelectorAll(selector);
    const elementArray: HTMLElement[] = [];

    nodeList.forEach(item => {
      elementArray.push(item as HTMLElement);
    });

    return elementArray;
  };
}
