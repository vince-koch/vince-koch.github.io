import { useState } from 'react'
import { useDropZoneCallback } from '@/utilities/useDropZoneCallback'
import { Strings } from '@/utilities/Strings'

export function Base64Tool() {
    const [isWrap, setIsWrap] = useState<boolean>(false)
    const [topText, setTopText] = useState<string>()
    const [topTextClasses, setTopTextClasses] = useState<string>()
    const [bottomText, setBottomText] = useState<string>()
    const [bottomTextClasses, setBottomTextClasses] = useState<string>()
    const dropZoneEncode = useDropZoneCallback(handleEncodeBase64, { noClick: true })
    const dropZoneDecode = useDropZoneCallback(handleDecodeBase64, { noClick: true })

    const wrapClass = isWrap ? "whitespace-normal" : "whitespace-pre";

    function handleDropFile(files: File[], callback: (text: string) => void) {
        const file = files[0]
        const reader = new FileReader()
        reader.onload = () => callback(reader.result as string)
        reader.readAsText(file)
    }

    function handleEncodeBase64(text: string) {
        try {
            setTopText(text)
            setTopTextClasses("")

            const base64 = Strings.encodeBase64(text)
            setBottomText(base64)
            setBottomTextClasses("")
        }
        catch (error) {
            setBottomText(error?.toString())
            setBottomTextClasses("text-red-400")
        }
    }

    function handleDecodeBase64(base64: string) {
        try {
            setBottomText(base64)
            setBottomTextClasses("")

            const text = Strings.decodeBase64(base64)
            setTopText(text)
            setTopTextClasses("")
        }
        catch (error) {
            setTopText(error?.toString())
            setTopTextClasses("text-red-400")
        }
    }

    function clear() {
        setTopText("")
        setTopTextClasses("")
        setBottomText("")
        setBottomTextClasses("")
    }

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row items-center">
                <div className="text-2xl text-purple-400">Base64</div>
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

            {/* <label className="label">Plain Text</label> */}
            <div {...dropZoneEncode.getRootProps()} className="flex flex-1">
                <input {...dropZoneEncode.getInputProps()} />
                <textarea
                    className={`textarea text-sm font-mono flex-1 m-2 ${wrapClass} ${topTextClasses}`}
                    onChange={e => handleEncodeBase64(e.target.value)}
                    placeholder='Enter Plain Text Here...'
                    value={topText}
                >
                </textarea>
            </div>

            {/* <label className="label">Base64 Text</label> */}
            <div {...dropZoneDecode.getRootProps()} className="flex flex-1">
                <input {...dropZoneDecode.getInputProps()} />
                <textarea
                    className={`textarea text-sm font-mono flex-1 m-2 ${wrapClass} ${bottomTextClasses}`}
                    onChange={e => handleDecodeBase64(e.target.value)}
                    placeholder='Enter Base64 Text Here...'
                    value={bottomText}
                >
                </textarea>
            </div>
        </div>)
}