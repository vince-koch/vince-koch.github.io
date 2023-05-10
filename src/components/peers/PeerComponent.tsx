import { useState } from 'react'
import { DataConnection, Peer } from 'peerjs'
import { PeerLocal } from '@/components/peers/PeerLocal'
import { PeerRemote } from '@/components/peers/PeerRemote'
import { PeerFileTransfer } from '@/components/peers/PeerFileTransfer'

export function PeerComponent() {
    const [peer, setPeer] = useState<Peer | undefined>()
    const [connection, setConnection] = useState<DataConnection | undefined>()
    const [peerId, setPeerId] = useState<string | undefined>()

    function startLocal(peerId: string | undefined) {
        const peer = peerId !== undefined && peerId.length > 0
            ? new Peer(peerId)
            : new Peer()
        
        setPeer(peer)

        peer.on('open', function(id: string) {
            console.info("peer on open", id);
            setPeerId(id)
        })

        peer.on('close', () => {
            console.info("peer on close")

        })

        peer.on('disconnected', (currentId: string) => {
            console.info("peer on disconnected", currentId)
            
        });

        peer.on('connection', connection => {
            console.info("peer on connection", connection)
            handleConnection(connection)
        })
    }

    function stopLocal() {
        connection?.close()
        setConnection(undefined)

        peer?.disconnect()
        setPeer(undefined)
        setPeerId(undefined)
    }

    function startRemote(remotePeerId: string | undefined) {
        if (remotePeerId === undefined) { throw Error("remotePeerId is undefined") }
        if (peer === undefined) { throw Error("Peer is undefined") }
        if (connection !== undefined) { throw Error("Remote is already connected") }

        const conn = peer.connect(remotePeerId)
        handleConnection(conn)
    }

    function stopRemote() {
        connection?.close()
        setConnection(undefined)
    }

    function handleConnection(connection: DataConnection) {
        setConnection(connection)
    
        connection.on('open', () => {
            console.info("connection on open")
        })

        connection.on('data', (data: any) => {
            console.info("connection on data", data)
        })

        connection.on('close', () => {
            console.info("connection on close")
            setConnection(undefined)
        })
    }

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row items-center">
                <div className="text-2xl text-purple-400">Peers</div>
                <span className="grow"></span>
                <PeerLocal peer={peer} openPeer={startLocal} closePeer={stopLocal} />
                <span className="grow"></span>
                <PeerRemote peer={peer} connection={connection} connectRemote={startRemote}  disconnectRemote={stopRemote}/>
            </div>

            {peer !== undefined && connection !== undefined && (
                <>
                    <PeerFileTransfer peer={peer} connection={connection} />
                </>
            )}
        </div>
    )
}