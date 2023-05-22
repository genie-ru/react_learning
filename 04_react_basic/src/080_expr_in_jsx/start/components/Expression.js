import "./Expression.css"

const Expression = () => {
    const title = "Expression"
    const arry = ['item', 'item2', 'item3'];
    const hello = (arg) => `${arg} Function`;
    return (
        //tolowercase()は文字列を小文字に変換する
        //titleにメソッドを追加出来る。
        <div className={title.toLocaleLowerCase()}>
            <h3>Hello {title}</h3>
            <h3>{arry}</h3>
            <h3>{hello('Hello')}</h3>
            <h3>{/*画面上には表示されない*/}</h3>
            {<h3>Hello JSX</h3>}
        </div>
    )
}

export default Expression