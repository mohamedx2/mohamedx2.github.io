# Download Portfolio Assets Script
$publicDir = "public"

if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir | Out-Null
}

Write-Host "Downloading skill icons..." -ForegroundColor Cyan

$assets = @{
    "html.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    "css.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    "js.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    "react.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    "redux.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    "reactquery.png" = "https://raw.githubusercontent.com/tanstack/query/main/media/emblem-light.svg"
    "ts.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    "next.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    "tailwind.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    "mui.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
    "framer.png" = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framer.svg"
    "stripe.png" = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/stripe.svg"
    "node-js.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    "express.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    "mongodb.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    "Firebase.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    "postger.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    "mysql.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    "prisma.png" = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prisma.svg"
    "graphql.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    "ReactNative.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    "tauri.svg" = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tauri.svg"
    "docker.webp" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    "figma.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    "go.png" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
}

$successCount = 0
$failCount = 0

foreach ($asset in $assets.GetEnumerator()) {
    $outputPath = Join-Path $publicDir $asset.Key
    Write-Host "  Downloading $($asset.Key)..." -ForegroundColor Gray
    
    try {
        Invoke-WebRequest -Uri $asset.Value -OutFile $outputPath -ErrorAction Stop
        Write-Host "  OK Downloaded $($asset.Key)" -ForegroundColor Green
        $successCount++
    }
    catch {
        Write-Host "  X Failed $($asset.Key)" -ForegroundColor Red
        $failCount++
    }
}

Write-Host "`nSummary: Success=$successCount Failed=$failCount" -ForegroundColor Cyan
