import React from "react"

export function CsvToolTable({
    records,
    headerRows = 1,
  }: {
    records: string[][] | undefined,
    headerRows?: number
  }) {
    if (!Array.isArray(records) || records.length === 0) {
        return null;
    }

    const headerRecords = records.slice(0, headerRows);
    const bodyRecords = records.slice(headerRows);

    return (
        <table className="table table-zebra table-compact w-full">
            {headerRecords && headerRecords.length > 0 && (
                <thead>
                    {headerRecords.map((record, index) => (
                        <tr key={index}>
                            {record.map((cell, index) => <th key={index}>{cell}</th>)}
                        </tr>  
                    ))}
                </thead>
            )}

            {bodyRecords && bodyRecords.length > 0 && (
                <tbody>
                    {bodyRecords.map((record, index) => (
                        <tr key={index}>
                            {record.map((cell, index) => <td key={index}>{cell}</td>)}
                        </tr>  
                    ))}
                </tbody>
            )}
        </table>);
  };