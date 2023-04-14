import { useState } from 'react'
import { useDropZoneCallback } from '~/utilities/useDropZoneCallback'
import { prettifyJson } from '~/utilities/strings'

export function JsonTool() {
    const [isWrap, setIsWrap] = useState<boolean>(false)
    const [topText, setTopText] = useState<string>()
    const [bottomText, setBottomText] = useState<string>()
    const [bottomTextClasses, setBottomTextClasses] = useState<string>()
    const dropZone = useDropZoneCallback(setJson, { noClick: true })

    const wrapClass = isWrap ? "whitespace-normal" : "whitespace-pre";

    function setJson(value: string) {
        try {
            setTopText(value)
            
            if (value === null || value === undefined || value.match(/^ *$/)) {
                setBottomText("")
                setBottomTextClasses("")
                return
            }

            const pretty = prettifyJson(value)
            setBottomText(pretty)
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
            <div className="flex flex-row">
                <span className="text-2xl text-purple-400">JSON</span>
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
                    className={`textarea textarea-secondary text-sm font-mono flex-1 m-2 ${wrapClass}`}
                    onChange={e => setJson(e.target.value)}
                    placeholder='Enter Plain Text Here...'
                    value={topText}
                >
                </textarea>
            </div>

            <textarea
                className={`textarea textarea-secondary text-sm font-mono flex-1 m-2 ${wrapClass} ${bottomTextClasses}`}
                placeholder='Pretty JSON Text Shows Up Here...'
                readOnly={true}
                value={bottomText}
            >
            </textarea>
        </div>)
}