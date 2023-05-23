import button from "./button.module.css"

export function Button(props) {
    return (
      <button className={button.buttonContact}>{props.text}</button>
    );
  }