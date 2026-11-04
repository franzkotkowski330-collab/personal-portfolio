$ErrorActionPreference = 'Stop'
$serverFile = Join-Path $PSScriptRoot 'server.cjs'
$siteDir = Join-Path $PSScriptRoot 'dist'
node $serverFile $siteDir 8090
