import { useState } from 'react'
import { Clipboard } from '@/utilities/Clipboard'
import { StyleCopRules } from './StyleCopRules'

export function StyleCopTool() {
    const [searchText, setSearchText] = useState<string>('')
    const [matchingRules, setMatchingRules] = useState<string[]>()
    const maxItems = 25

    function handleSearchTextChange(searchText: string): void
    {
        const matchingRules = StyleCopRules.allRules
            .filter(item => item.toUpperCase().indexOf(searchText.toUpperCase()) > -1);

        setSearchText(searchText)
        setMatchingRules(matchingRules)
    }

    function handleCopyClick(rule: string) {
        const attributeText = StyleCopRules.getAttributeText(rule);
        if (attributeText) {
            Clipboard.copyText(attributeText)
        }
    }

    return (
        <div className="flex flex-col w-full h-screen p-2">
            <div className="flex flex-row items-center">
                <div className="text-2xl text-purple-400">StyleCop</div>
                <span className="grow"></span>
            </div>

            <label className="label mt-4">Stylecop Rule Search:</label>
            <input className="input input-bordered"
                type="text"
                placeholder="Stylecop Rule Search"
                title="Stylecop Rule Search"
                value={searchText}
                onChange={e => handleSearchTextChange(e.target.value)} />

            <div className="mt-4">
                {matchingRules && (
                    <div className="text-xl text-orange-400">
                        {matchingRules.length} {matchingRules.length !== 1 ? "matches" : "match"}
                        {matchingRules.length > maxItems ? ` (Displaying 1 - ${maxItems})` : ""}
                    </div>
                )}

                <ul>
                    {matchingRules && matchingRules.slice(0, maxItems).map(rule => (
                        <li key={rule.substring(0, 6)}>
                            <a href="#" onClick={() => handleCopyClick(rule)} title={"Click to copy " + rule.substring(0, 6)}>
                                {rule}
                            </a>
                        </li>))}
                </ul>
            </div>
        </div>
    )
}