import { useState } from 'react'
import MarkdownIt from 'markdown-it'
import { Paths } from '~/utilities/Paths'
import { Strings } from '~/utilities/Strings'
import './github-markdown.css'

export function Notes() {
    const [isRaw, setIsRaw] = useState<boolean>(false)
    const [noteFileName, setNoteFileName] = useState<string>()
    const [noteText, setNoteText] = useState<string>()
    const [notePath, setNotePath] = useState<string>()

    const ext = notePath !==  undefined
        ? Paths.getFilenameExtension(notePath)?.toLocaleLowerCase()
        : undefined;

    const noteFiles: string[] = [
        "Capture IIS traffic in Fiddler.md",
        "Enable tracing in ASP.Net.md",
        "Fix Binding Redirects.md",
        "Fix Visual Studio 2019.md",
        "Github Pages (gh-pages).md",
        "Icons.md",
        "Minimal nuspec file.md",
        "OwinAssemblies.html",
        "Settings.StyleCop",
        "VS Code F5 Debugging.md",
        "WCF.md"
    ];

    async function handleFileSelect(file: string) {
        async function fetchNote(): Promise<any>  {
            setNotePath('')
            setNoteText('')

            const response = await fetch(`/notes/${file}`)
            const text = await response.text()

            setNoteText(text)
            setNotePath(file)
        }

        fetchNote()
            .catch(error => {
                setNoteText(error?.toString())
                setNotePath(file + ".error")
            })
    }

    function renderFile() {
        if (isRaw) {
            return "<pre>" + Strings.replaceHtmlEntities(noteText!) + "</pre>"
        }

        switch (ext) {
            case ".md":
                return new MarkdownIt().render(noteText!);

            case ".error":
            case ".nuspec":
            case ".stylecop":
            case ".xml":
                return "<pre>" + Strings.replaceHtmlEntities(noteText!) + "</pre>"

            case ".htm":
            case ".html":
            case ".txt":
            case undefined:
            default:
                return noteText
        }
    }

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row items-center">
                <span className="text-2xl text-purple-400">Notes</span>
                <span className="grow"></span>
                <select className="select select-bordered"
                    value={noteFileName}
                    onChange={e => handleFileSelect(e.target.value)}
                >
                    {noteFiles.map((file, index) => (
                        <option key={index}>{file}</option>
                    ))}
                </select>
                <span className="grow"></span>
                <div className="btn-group">
                    <button
                        title="Raw Text"
                        className={`btn ${isRaw ? "btn-active" : ""}`}
                        onClick={e => setIsRaw(!isRaw)}>
                            Raw
                    </button>
                </div>                
            </div>

            {notePath && (
                <div
                    className=" mt-4 markdown-body"
                    dangerouslySetInnerHTML={{ __html: renderFile() }}
                />
            )}
        </div>);
}