Write-Host "prebuild.ps1" -ForegroundColor Yellow

$CurrentFolder = $PSScriptRoot
$TargetFolder = Resolve-Path "$($PSScriptRoot)\.."
$ExcludeFolders = @(".git", "source")
$ExcludeFiles = @(".gitignore", "README.md")

# Print the folder we will be operating on
Write-Host $TargetFolder

# Remove folders from target folder if they are not in exclude list
$Folders = Get-ChildItem -Path $TargetFolder -Name -Directory
foreach ($Folder in $Folders)
{
    if (-not ($ExcludeFolders -match $Folder))
    {
        Write-Host " x  " -ForegroundColor Red -NoNewline
        Write-Host "$($Folder)\" -ForegroundColor DarkGray
        $TargetPath = "$($TargetFolder)\$($Folder)"
        Remove-Item "$($TargetPath)" -Recurse
    }
    else
    {
        Write-Host "    $($Folder)\"
    }
}

# Remove files from target folder if they are not in the exclude list
$Files = Get-ChildItem -Path $TargetFolder -Name -File
foreach ($File in $Files)
{
    if (-not ($ExcludeFiles -match $File))
    {
        Write-Host " x  " -ForegroundColor Red -NoNewline
        Write-Host "$($File)" -ForegroundColor DarkGray
        $TargetPath = "$($TargetFolder)\$($File)"
        Remove-Item "$($TargetPath)"
    }
    else
    {
        Write-Host "    $($File)"
    }
}