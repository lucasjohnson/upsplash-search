import QueryElement from "./QueryElement";

export default class LockViewport {
  public static modal = (isOpen: boolean): void => {
    const body = QueryElement.selector("body");

    !isOpen
      ? body?.classList.add("isFixed")
      : body?.classList.remove("isFixed");
  };
}
