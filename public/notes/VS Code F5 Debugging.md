VS Code F5 Debugging

Add a launch.json configuration file to a VSCode project to enable F5 debug launcher as follows

Spa/.vscode/launch.json
```
{​​​​​​​​
    "type": "chrome",
    "request": "launch",
    "name": "Launch Chrome against localhost",
    "url": "https://localhost:44341",
    "webRoot": "${​​​​​​​​workspaceFolder}​​​​​​​​"
}​​​​​​​​
```