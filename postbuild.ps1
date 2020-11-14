Write-Host "postbuild.ps1" -ForegroundColor Yellow

$CurrentFolder = $PSScriptRoot
$SourceFolder = "$($PSScriptRoot)\build"
$TargetFolder = Resolve-Path "$($PSScriptRoot)\.."

Write-Host "$($SourceFolder)" -NoNewline
Write-Host " ==> " -ForegroundColor Green -NoNewline
Write-Host "$($TargetFolder)"

Copy-Item -Path "$($SourceFolder)\*" -Destination "$($TargetFolder)" -Recurse