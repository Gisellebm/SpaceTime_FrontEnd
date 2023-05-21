interface ButtonProps {
    title: string;
}

export function Button(props: ButtonProps) {
    return (
        <p className="text-red-500">
            {props.title}
        </p>
    )
}