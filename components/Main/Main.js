export default props => {
    // props
    const { children, className } = props
    return (
        <main className={className}>
            {children}
        </main>
    )
}