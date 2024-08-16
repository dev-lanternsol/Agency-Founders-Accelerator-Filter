import React from "react";

const Table = ({ data }) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover" style={{ tableLayout: "fixed", width: "100%" }}>
                <thead>
                    <tr>    
                        <th style={{ width: "20%" }}>Title</th>
                        <th style={{ width: "50%" }}>Description</th>
                        <th style={{ width: "30%" }}>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={{ width: "20%" }}>{item.title || "No title available"}</td>
                            <td className="text-break" style={{ width: "50%" }}>{item.description || item.description_2 || item.panel__block || "No description available"}</td>
                            <td style={{ width: "30%" }}><a href={item.url || "#"} target="_blank" rel="noopener noreferrer">{item.url ? item.url : "No link available"}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table