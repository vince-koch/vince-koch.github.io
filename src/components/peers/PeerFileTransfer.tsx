import { useState, useEffect } from 'react'
import { Peer, DataConnection } from 'peerjs'

export function PeerFileTransfer({
    peer,
    connection,
}: {
    peer: Peer
    connection: DataConnection
}) {
    const [file, setFile] = useState<File | null | undefined>()

    function sendFile(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (file === null || file === undefined) { return }

        connection.send({
            file: file as Blob,
            filename: file.name,
            filetype: file.type
        })

        console.info("sent file")
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">File Transfer</h2>
                
                <form onSubmit={e => sendFile(e)}>
                    <input className="file-input" type="file" accept="*" onChange={e => setFile(e.target.files?.item(0))} />
                    <button className="btn-primary" type="submit" value="Send">Submit</button>
                </form>

            </div>
        </div>
    )
}