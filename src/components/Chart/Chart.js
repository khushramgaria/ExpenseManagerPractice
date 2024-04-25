import "./Chart.css"
import ChartBar from "./ChartBar"

function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValues)

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoints) => (
                <ChartBar 
                    key={dataPoints.label}
                    value={dataPoints.value} 
                    maxValue={totalMax} 
                    label={dataPoints.label} 
                />
            ))}
        </div>
    )
}

export default Chart