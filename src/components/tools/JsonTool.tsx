import { useState } from 'react'
import { JSONTree } from 'react-json-tree'
import { useDropZoneCallback } from '@/utilities/useDropZoneCallback'

enum ResultView {
    Json = 1,
    Tree = 2
}

export function JsonTool() {
    const [isWrap, setIsWrap] = useState<boolean>(false)
    const [resultView, setResultView] = useState<ResultView>(ResultView.Json)
    const [topText, setTopText] = useState<string>()
    const [bottomText, setBottomText] = useState<string>()
    const [bottomJson, setBottomJson] = useState<object | undefined>()
    const [bottomTextClasses, setBottomTextClasses] = useState<string>()
    const dropZone = useDropZoneCallback(setJson, { noClick: true })   
    const wrapClass = isWrap ? "whitespace-normal" : "whitespace-pre";

    const theme = {
        scheme: 'ocean',
        author: 'chris kempson (http://chriskempson.com)',
        base00: '#2b303b',
        base01: '#343d46',
        base02: '#4f5b66',
        base03: '#65737e',
        base04: '#a7adba',
        base05: '#c0c5ce',
        base06: '#dfe1e8',
        base07: '#eff1f5',
        base08: '#bf616a',
        base09: '#d08770',
        base0A: '#ebcb8b',
        base0B: '#a3be8c',
        base0C: '#96b5b4',
        base0D: '#8fa1b3',
        base0E: '#b48ead',
        base0F: '#ab7967'
    }

    function setJson(value: string) {
        try {
            setTopText(value)
            
            if (value === null || value === undefined || value.match(/^ *$/)) {
                setBottomText("")
                setBottomTextClasses("")
                return
            }

            const json = JSON.parse(value)
            const text = JSON.stringify(json, null, 2)

            setBottomJson(json)
            setBottomText(text)
            setBottomTextClasses("")
        }
        catch (error) {
            setBottomText(error?.toString())
            setBottomTextClasses("text-red-400")
        }
    }

    function clear() {
        setJson("")
    }

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row items-center">
                <div className="text-2xl text-purple-400">JSON</div>
                
                <span className="grow"></span>
                
                <label className="label">Result View:&nbsp;</label>
                <div className="btn-group">
                    <button
                        title="JSON"
                        className={`btn ${resultView === ResultView.Json ? "btn-active" : ""}`}
                        onClick={e => setResultView(ResultView.Json)}>
                            JSON
                    </button>
                    <button
                        title="Tree"
                        className={`btn ${resultView === ResultView.Tree ? "btn-active" : ""}`}
                        onClick={e => setResultView(ResultView.Tree)}>
                            Tree
                    </button>
                </div>
                
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
                    onChange={e => setJson(e.target.value)}
                    placeholder='Enter Plain Text Here...'
                    value={topText}
                >
                </textarea>
            </div>

            {resultView === ResultView.Json && (
                <textarea
                    className={`textarea text-sm font-mono flex-1 m-2 ${bottomTextClasses}`}
                    placeholder='Pretty JSON Text Shows Up Here...'
                    readOnly={true}
                    value={bottomText}
                >
                </textarea>
            )}

            {resultView === ResultView.Tree && (
                <div className='flex-1 m-2 overflow-scroll'>
                    <JSONTree data={bottomJson} theme={theme} />
                </div>
            )}
        </div>)
}