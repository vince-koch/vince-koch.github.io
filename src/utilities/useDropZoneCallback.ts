import { useDropzone, DropzoneOptions, DropzoneState } from 'react-dropzone'

function handleDropFile(files: File[], callback: (text: string) => void) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = () => callback(reader.result as string)
    reader.readAsText(file)
}

export function useDropZoneCallback(
    callback: (text: string) => void,
    options?: DropzoneOptions): DropzoneState
{
    const dropZoneState = useDropzone({ 
        onDrop: files => handleDropFile(files, callback),
        ...options
    })

    return dropZoneState
}