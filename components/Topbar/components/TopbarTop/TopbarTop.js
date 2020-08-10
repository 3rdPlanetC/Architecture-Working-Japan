export default function TopbarTop(props) {
    // props
    const { className, icon } = props
    return (
        <div className={className.topbarTop}>
            <div className={className.topbarTopLeft}>
                <img src={icon} height="100" width="80" alt="Icon Image"/>
            </div>
            <div className={className.topbarTopRight}>
                <h2>Collector Item No Ning San</h2>
            </div>
        </div>
    )
}