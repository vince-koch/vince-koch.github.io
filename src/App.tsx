import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Base64Tool } from '@/components/tools/Base64Tool'
import { CsvTool } from '@/components/tools/CsvTool'
import { JsonTool } from '@/components/tools/JsonTool'
import { XmlTool } from '@/components/tools/XmlTool'
import { StyleCopTool } from '@/components/misc/StyleCopTool'
import { PeerComponent } from '@/components/peers/PeerComponent'
import { SideNav } from '@/components/layout/SideNav'
import { Notes } from '@/components/misc/Notes'
import { Home } from '@/components/layout/Home'
import 'App.css'

export function App() {
    return (
        <BrowserRouter>
            <div className='flex items-stretch min-h-screen'>
                <SideNav />
                
                <Routes>
                    <Route path="/tools/base64" element={<Base64Tool />} />
                    <Route path="/tools/csv" element={<CsvTool />} />
                    <Route path="/tools/json" element={<JsonTool />} />
                    <Route path="/tools/xml" element={<XmlTool />} />
                    <Route path="/misc/notes" element={<Notes />} />
                    <Route path="/misc/stylecop" element={<StyleCopTool />} />
                    <Route path="/peers" element={<PeerComponent />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>)
}
