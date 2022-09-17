import "./app-info.css";

const AppInfo = (props) => {
  const {allEmployers, getPrem} = props
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployers}</h2>
            <h2>Премию получат: {getPrem}</h2>
        </div>
    )
}

export default AppInfo;