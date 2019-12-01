PowerShell Compress-Archive -Path .\2D\* -DestinationPath .\2D.zip
PowerShell Compress-Archive -Path .\3D\* -DestinationPath .\3D.zip
PowerShell Remove-Item '.\2D' -Recurse
PowerShell Remove-Item '.\3D' -Recurse