import { useState } from 'react'
import Papa from 'papaparse'
import { useDropZoneCallback } from '~/utilities/useDropZoneCallback'
import { CsvToolTable } from '~/components/tools/CsvToolTable'

export function CsvTool() {
    const [headerRowCount, setHeaderRowCount] = useState<number>(1)
    const [delimiter, setDelimiter] = useState<string>(",")
    const [isWrap, setIsWrap] = useState<boolean>(false)
    const [topText, setTopText] = useState<string>()
    const [ records, setRecords ] = useState<string[][]>();
    const dropZone = useDropZoneCallback(setCsv, { noClick: true })

    const wrapClass = isWrap ? "whitespace-normal" : "whitespace-pre";

    function setCsv(value: string) {
        try {
            setTopText(value)

            Papa.parse<string[]>(
                value,
                {
                  delimiter: ",",
                  beforeFirstChunk: function(chunk) {
                    var rows = chunk.trim().replace(/\s*,\s*/g, ',');
                    return rows;
                  },
                  complete: function(results) {
                      console.log("csv parsed ==> ", results.data);
                      setRecords(results.data);
                  }
                });
        }
        catch (error) {

        }
    }

    function clear() {
        setCsv("")
    }

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row items-center">
                <div className="text-2xl text-purple-400">CSV</div>
                <span className="grow"></span>
                
                <label className="label">Header Rows:</label>
                <input className="input input-bordered input-sm w-20"
                    type="number"
                    placeholder="Number of Header Rows"
                    title="Number of Header Rows"
                    value={headerRowCount}
                    onChange={e => setHeaderRowCount(parseInt(e.target.value))} />
                
                <span className="grow"></span>
                
                <label className="label">Delimiter:</label>
                <input className="input input-bordered input-sm w-20"
                    type="text" 
                    placeholder="Delimiter"
                    title="Delimiter"
                    value={delimiter}
                    onChange={e => setDelimiter(e.target.value)}
                />

                <span className="grow"></span>
                <div className="btn-group">
                    <button
                        title="Word Wrap"
                        className={`btn ${isWrap ? "btn-active" : ""}`}
                        onClick={e => setIsWrap(!isWrap)}>
                            Wrap
                    </button>
                    <button title="Clear Text"
                        className="btn"
                        onClick={e => clear()}>
                            Clear
                    </button>
                </div>
            </div>

            <div {...dropZone.getRootProps()} className="flex flex-1">
                <input {...dropZone.getInputProps()} />
                <textarea
                    className={`textarea text-sm font-mono flex-1 m-2 ${wrapClass}`}
                    onChange={e => setCsv(e.target.value)}
                    placeholder='Enter Delimited Text Here...'
                    value={topText}
                >
                </textarea>
            </div>

            <CsvToolTable records={records} />
        </div>)
}