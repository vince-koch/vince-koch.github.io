import { useState } from 'react'
import { Peer, DataConnection } from 'peerjs'

export function PeerRemote({
    peer,
    connection,
    connectRemote: connectPeer,
    disconnectRemote: disconnectPeer,
}: {
    peer: Peer | undefined,
    connection: DataConnection | undefined,
    connectRemote: (remotePeerId: string | undefined) => void,
    disconnectRemote: () => void,    
}) {
    const [remotePeerId, setRemotePeerId] = useState<string | undefined>()
    const peerIdText = connection?.peer ?? remotePeerId ?? ''
    const isDisabled = peer === undefined || (connection === undefined && (remotePeerId === undefined || remotePeerId === null || remotePeerId.length < 3));

    function handleClick() {
        if (connection === undefined) {
            connectPeer(remotePeerId)
        }
        else {
            disconnectPeer()
        }
    }

    return (
        <div>
            <label className="input-group">
                <span>Remote </span>

                <input
                    className="input"
                    disabled={peer === undefined || connection !== undefined}
                    placeholder='Remote Id'
                    value={peerIdText}
                    onChange={e => setRemotePeerId(e.target.value)} />
        
                <button
                    className={isDisabled ? 'btn-disabled' : 'btn-primary'}
                    disabled={isDisabled}
                    onClick={e => handleClick()}>
                        {connection === undefined ? "Connect" : "Disconnect"}
                </button>
            </label>        
        </div>
    )
}