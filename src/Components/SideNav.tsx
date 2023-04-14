import { NavLink, To } from 'react-router-dom'

export function SideNav() {
    function LiNavLink({ 
        to,
        children
    }: {
        to: To,
        children?: React.ReactNode
    }) {
        return (
            <li>
                <NavLink
                    to={to}
                    className={(state) => state.isActive ? "link link-hover" : "link link-accent" }
                >
                    {children}
                </NavLink>
            </li>
        )
    }

    return (
        <div className="bg-stone-900 px-5 shadow-teal-900 shadow-lg">
            <h2 className="text-3xl font-bold leading-normal mt-0 mb-2 text-purple-800">CookieCode</h2>
           
            <ul>
                <LiNavLink to="/">Home</LiNavLink>
            </ul>

            <section className="mt-4">
                <hr className="border-purple-800" />
                <h4 className="text-2xl text-purple-400">Tools</h4>
                <ul className="ml-4">
                    <LiNavLink to="/tools/base64">Base64</LiNavLink>
                    <LiNavLink to="/tools/csv">CSV</LiNavLink>
                    <LiNavLink to="/tools/json">JSON</LiNavLink>
                    <LiNavLink to="/tools/xml">XML</LiNavLink>
                </ul>
            </section>

            <section className="mt-4">
                <hr className="border-purple-800" />
                <h4 className="text-2xl text-purple-400">Misc</h4>
                <ul className="ml-4">
                    <LiNavLink to="/misc/stylecop">Stylecop</LiNavLink>
                    <LiNavLink to="/misc/notes">Notes</LiNavLink>
                </ul>
            </section>
        </div>)
}