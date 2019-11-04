$server = "ec2-18-196-2-127.eu-central-1.compute.amazonaws.com"
$accountName = "Administrator"
$zip = "deploy.zip"
$origin = Get-Location
$originZip = "$origin\$zip"
$destination = "C:\www"
$destinationDir = "$destination\(Get-Item .\deploy.bat).Directory.Name"
$destinationZip = "$destination\$zip"

Remove-Item "node_modules" -Force -Recursive

Compress-Archive -Path $origin -DestinationPath $originZip

$so = New-PsSessionOption -SkipCACheck -SkipCNCheck
$creds = Get-Credential -Credential $accountName
$session = New-PSSession -ComputerName $server -Credential $creds -UseSSL -SessionOption $so

Invoke-Command -Session $session -Command { Remove-Item $Using:destinationDir -Force -Recurse }
Copy-Item $originZip $destinationZip -ToSession $session -Recurse -Force
Invoke-Command -Session $session -Command { Expand-Archive $using:destinationZip -DestinationPath $using:destination }
Invoke-Command -Session $session -Command { Remove-Item $Using:destinationZip -Force -Recurse }

Remove-Item -Path $originZip
Remove-PSSession $session