export default function Line(props) {
    // props
    const { className, TopbarLine } = props
    return (
        <div className={className.line}>
            <img src={TopbarLine} alt="Line" width="100%"/>
        </div>
    )
}