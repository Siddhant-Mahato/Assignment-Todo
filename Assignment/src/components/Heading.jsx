import style from "./Heading.module.css"

const Heading = () => {
    return (
        <div className={`${style.heading} text-2xl font-bold text-center`}>To-Do App</div>
    )
}

export default Heading;