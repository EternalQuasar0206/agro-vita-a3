import "./BigButton.css"

function BigButton(props: Record<string, any>) {
    return (
        <button onClick={props.onClick} className="big-button">{props.text}</button>
    )
}

export { BigButton }