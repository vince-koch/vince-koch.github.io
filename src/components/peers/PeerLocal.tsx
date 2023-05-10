import { useState } from 'react'
import { Peer } from 'peerjs'
import { Clipboard } from '@/utilities/Clipboard'
import { beep } from '@/utilities/beep'

export function PeerLocal({
    peer,
    openPeer,
    closePeer,
}: {
    peer: Peer | undefined,
    openPeer: (peerId: string | undefined) => void,
    closePeer: () => void,
}) {
    const [localPeerId, setLocalPeerId] = useState<string | undefined>()
    const peerIdText = peer?.id ?? localPeerId ?? ''

    function handleOpenClose() {
        if (peer === undefined) {
            openPeer(localPeerId)
        }
        else {
            closePeer()
        }
    }

    function handleCopy() {
        Clipboard.copyText(peerIdText)
        beep()
    }

    return (
        <div>
            <label className="input-group">
                <span>Local </span>

                <input
                    className="input"
                    disabled={peer !== undefined}
                    placeholder='Local Id'
                    value={peerIdText}
                    onChange={e => setLocalPeerId(e.target.value)} />

                {peer !== undefined && (
                    <button
                        className="btn-outline"
                        onClick={e => handleCopy()}>
                            Copy
                    </button>
                )}

                <button
                    className={peer === undefined ? "btn-success" : "btn-error"}
                    onClick={e => handleOpenClose()}>
                        {peer === undefined ? "Open" : "Close"}
                </button>
            </label>
        </div>
    )
}