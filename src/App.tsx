import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom'
import { Base64Tool } from '~/components/tools/Base64Tool'
import { CsvTool } from '~/components/tools/CsvTool'
import { JsonTool } from '~/components/tools/JsonTool'
import { XmlTool } from '~/components/tools/XmlTool'
import { SideNav } from '~/components/SideNav'
import { Home } from './components/Home'
import { Notes } from './components/Notes'
import 'App.css'

export function App() {
    return (
        <Router>
            <div className='flex items-stretch min-h-screen'>
                <SideNav />
                
                <Routes>
                    <Route path="/tools/base64" element={<Base64Tool />} />
                    <Route path="/tools/csv" element={<CsvTool />} />
                    <Route path="/tools/json" element={<JsonTool />} />
                    <Route path="/tools/xml" element={<XmlTool />} />
                    <Route path="/misc/notes" element={<Notes />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>)
}
