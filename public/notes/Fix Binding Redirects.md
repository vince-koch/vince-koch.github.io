# Fix Binding Redirects

### Error Message
> Could not load file or assembly "System.Net.Http, Version=4.0.0.0, Culture=neutral PublicKeyToken=b03f5f7f11d50a3a" or one of its dependencies. The system cannot find the file specified.

### Steps to resolve
* Update visual studio to latest version (it matters)
* Remove all binding redirects from web.config
* Add this to the .csproj file:
    ```xml
    <PropertyGroup>
        <AutoGenerateBindingRedirects>true</AutoGenerateBindingRedirects>
        <GenerateBindingRedirectsOutputType>true</GenerateBindingRedirectsOutputType>
    </PropertyGroup>
    ```
* Build the project
* In the bin folder there should be a (WebAppName).dll.config file which should have redirects in it, copy these to the web.config
* Remove the above snipped from the .csproj file

### Solution found on Stack Overflow
https://stackoverflow.com/questions/38408167/could-not-load-file-or-assembly-system-net-http-version-4-0-0-0-culture-neutr